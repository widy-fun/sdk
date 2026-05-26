import type { RsbuildPlugin } from "@rsbuild/core";
import { WebSocketServer } from "ws";

export function rsBuildHotReloadPlugin({
	port = 4777,
	delay = 400,
	entryFilePath,
	isExtension = false,
}: {
	port?: number;
	delay?: number;
	entryFilePath: string;
	isExtension?: boolean;
}): RsbuildPlugin {
	const isWatch = process.argv.includes("--watch");

	return {
		name: "hot-reload-widget",
		setup(api) {
			if (!isWatch) return;

			const ws = new WebSocketServer({ port });

			api.transform({}, ({ code, resourcePath }) => {
				if (resourcePath === entryFilePath) {
					const runtimeReload = isExtension
						? "chrome.runtime.reload()"
						: "window.location.reload()";
					const hotReloadSnippet = `
						(function() {
						function connect() {
							const ws = new WebSocket('ws://localhost:${port}');

							ws.addEventListener('message', (event) => {
							if (event.data === 'hot-reload-widget') {
								setTimeout(() => ${runtimeReload}, ${delay});
							}
							});

							ws.addEventListener('close', () => {
							setTimeout(connect, 1000);
							});

							ws.addEventListener('error', () => {
							ws.close();
							});
						}
						connect();
						})();`;
					return `${code}\n\n${hotReloadSnippet}`;
				}
				return code;
			});

			api.onAfterBuild(() => {
				ws.clients.forEach((client) => {
					if (client.readyState === client.OPEN) {
						client.send("hot-reload-widget");
					}
				});
			});
		},
	};
}
