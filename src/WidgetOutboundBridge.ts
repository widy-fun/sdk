import type {
	IWidgetRequest,
	IWidgetResponse,
	IWidgetTransport,
	WidgetMutation,
	WidgetQuery,
	WidgetSubscription,
} from "./types";

export default class WidgetOutboundBridge implements IWidgetTransport {
	private readonly pendingRequests = new Map();
	private readonly subscriptionHandlers = new Map();
	private destroyed = false;

	constructor(private timeout = 5000) {
		window.addEventListener("message", this.handleMessage);
	}

	private handleMessage = (event: MessageEvent<IWidgetResponse>): void => {
		const { id, data, error } = event.data ?? ({} as IWidgetResponse);

		const handler = this.subscriptionHandlers.get(id);
		if (handler) {
			handler(data);
			return;
		}

		const pending = this.pendingRequests.get(id);
		if (!pending) return;

		clearTimeout(pending.timer);
		this.pendingRequests.delete(id);

		if (error) {
			pending.reject(error);
		} else {
			pending.resolve(data);
		}
	};

	private send(request: IWidgetRequest): void {
		window.parent.postMessage(request, "*");
	}

	action<A, R = unknown>(
		scope: WidgetQuery | WidgetMutation,
		arg?: A,
	): Promise<R> {
		return new Promise<R>((resolve, reject) => {
			if (this.destroyed) {
				reject(new Error("Bridge destroyed"));
				return;
			}

			const id = crypto.randomUUID();

			const timer = setTimeout(() => {
				if (this.pendingRequests.delete(id)) {
					reject(new Error(`Parent request "${scope}" timed out`));
				}
			}, this.timeout);

			this.pendingRequests.set(id, { resolve, reject, timer });

			try {
				this.send({ id, scope, arg });
			} catch (err) {
				clearTimeout(timer);
				this.pendingRequests.delete(id);
				reject(err);
			}
		});
	}

	subscribe<T>(
		scope: WidgetSubscription,
		onMessage: (message: T) => void,
	): () => void {
		if (this.destroyed) return () => undefined;

		const id = crypto.randomUUID();
		this.subscriptionHandlers.set(id, onMessage);

		try {
			this.send({ id, scope });
		} catch {
			this.subscriptionHandlers.delete(id);
		}

		return () => {
			if (!this.subscriptionHandlers.delete(id)) return;
			if (this.destroyed) return;
			try {
				this.send({ id, scope, unsubscribe: true });
			} catch {
				// ignore: parent is already gone
			}
		};
	}

	destroy(): void {
		if (this.destroyed) return;
		this.destroyed = true;
		window.removeEventListener("message", this.handleMessage);
		this.subscriptionHandlers.clear();
		for (const pending of this.pendingRequests.values()) {
			clearTimeout(pending.timer);
			pending.reject(new Error("Bridge destroyed"));
		}
		this.pendingRequests.clear();
	}
}
