import type {
	IWidgetResponse,
	WidgetMutation,
	WidgetQuery,
	WidgetSubscription,
} from "./types";

export default class WidgetOutboundBridge {
	private readonly pendingRequests = new Map();
	private readonly subscriptionHandlers = new Map();

	constructor(private timeout = 5000) {
		window.addEventListener("message", this.handleMessage);
	}

	private handleMessage = (event: MessageEvent<IWidgetResponse>): void => {
		const { id, data, error } = event.data;

		if (this.subscriptionHandlers.has(id)) {
			this.subscriptionHandlers.get(id)?.(data);
			return;
		}

		if (!this.pendingRequests.has(id)) return;

		const { resolve, reject } = this.pendingRequests.get(id);
		this.pendingRequests.delete(id);

		if (error) {
			reject(error);
		} else {
			resolve(data);
		}
	};

	action<P, R = unknown>(
		scope: WidgetQuery | WidgetMutation,
		arg?: P,
	): Promise<R> {
		return new Promise((resolve, reject) => {
			const id = crypto.randomUUID();
			this.pendingRequests.set(id, { resolve, reject });
			window.parent.postMessage({ id, scope, arg }, "*");

			setTimeout(() => {
				if (this.pendingRequests.has(id)) {
					this.pendingRequests.delete(id);
					reject(new Error(`Parent request "${scope}" timed out`));
				}
			}, this.timeout);
		});
	}

	subscribe<T>(
		scope: WidgetSubscription,
		onMessage: (message: T) => void,
	): () => void {
		const id = crypto.randomUUID();
		this.subscriptionHandlers.set(id, onMessage);
		window.parent.postMessage({ id, scope }, "*");

		return () => {
			this.subscriptionHandlers.delete(id);
		};
	}

	destroy(): void {
		this.subscriptionHandlers.clear();
		this.pendingRequests.clear();
		window.removeEventListener("message", this.handleMessage);
	}
}
