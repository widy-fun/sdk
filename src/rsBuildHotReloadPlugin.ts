import type { RsbuildPlugin } from "@rsbuild/core";
import { WebSocketServer } from "ws";

export function rsBuildHotReloadPlugin({
	port = 4777,
	delay = 400,
	entryFilePath,
}: {
	port?: number;
	delay?: number;
	entryFilePath: string;
}): RsbuildPlugin {
	const isWatch = process.argv.includes("--watch");
	const ws = new WebSocketServer({ port });

	return {
		name: "hot-reload-widget",
		setup(api) {
			if (!isWatch) return;

			api.transform({}, ({ code, resourcePath }) => {
				if (resourcePath === entryFilePath) {
					const hotReloadSnippet = `
						(function() {
						function connect() {
							const ws = new WebSocket('ws://localhost:${port}');

							ws.addEventListener('message', (event) => {
							if (event.data === 'hot-reload-widget') {
								setTimeout(() => window.location.reload(), ${delay});
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
