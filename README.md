# @widy/sdk

A TypeScript SDK for Widy widget integrations.

This package exports shared enum and type definitions, plus a `WidgetOutboundBridge` helper for sending structured messages from iframe widgets to their parent window.

## Installation

```bash
npm install @widy/sdk
```

## Package Exports

- `WidgetOutboundBridge` - the main bridge class for widget outbound communication
- `rsBuildHotReloadPlugin` - a development plugin for automatic widget reloads during rsbuild watch builds
- `enums` - shared enum values used across the SDK
- `types` - rich TypeScript interfaces for messages, events, alerts, donations, subscriptions, goals, settings, and more

## Usage

```ts
import { WidgetOutboundBridge } from "@widy/sdk";

const bridge = new WidgetOutboundBridge();

// Send a one-way message to the parent window
bridge.send<MessageId>("widgets:alert:played.send", id);

// Send a request and await a response from the parent
const response = await bridge.action<{ filter: IMessagesFilter } & IPageParm>("widgets:messages.read", data);

// Subscribe to streaming messages
const unsubscribe = bridge.subscribe<IClientMessage>("widgets:messages.subscription", (message) => {
  console.log("subscription message", message);
});

// Tear down when the widget is destroyed
bridge.destroy();
```

> `WidgetOutboundBridge` is intended for use inside a browser widget iframe. It communicates with `window.parent` using `postMessage` and listens for replies via `message` events.

## Development Hot Reload

This package also exports `rsBuildHotReloadPlugin`, a helper plugin for `rsbuild` watch mode. It injects a small client-side script into the configured entry file and sends a reload signal over WebSocket after every build.

```ts
import { rsBuildHotReloadPlugin } from "@widy/sdk";

export default {
  plugins: [
    rsBuildHotReloadPlugin({
      port: 4777,
      delay: 400,
      entryFilePath: "src/index.ts",
    }),
  ],
};
```

Options:
- `port?: number` — WebSocket port to listen on (default: `4777`)
- `delay?: number` — milliseconds to wait before reloading the browser after a rebuild (default: `400`)
- `entryFilePath: string` — path to the entry file that should receive the hot reload snippet

When `rsbuild` runs with `--watch`, the plugin starts a WebSocket server and reloads the widget in the browser automatically after rebuilds.

## `WidgetOutboundBridge` API

### `new WidgetOutboundBridge()`
Creates a new bridge instance and starts listening for inbound response messages.

### `action<P, R = unknown>(scope: WidgetAction, payload?: P): Promise<R>`
Send a request to the parent window and wait for its response.
- `scope` is the action type.
- `payload` is optional request data.
- Returns a promise that resolves with the response result or rejects on error or timeout.

### `send<P>(scope: WidgetSend, payload?: P): void`
Send a fire-and-forget message to the parent window.

### `subscribe<T>(scope: WidgetSubscription, onMessage: (message: T) => void): () => void`
Register a subscription handler and return an unsubscribe callback.

### `destroy(): void`
Remove event listeners and clear pending requests/subscriptions.

## TypeScript Support

This SDK ships with type definitions under `dist/index.d.ts`.

### Common Exported Types

- `IClientMessage`
- `IDonation`
- `IFollow`
- `ISubscription`
- `IRaid`
- `IAlert`
- `ISettings`
- `IEventMessage<T>`
- `IService<T, S>`
- `IStreamElementsEvent<T>`
- `IGoal`
- `IEdgeTtsSettings`

### Common Exported Enums

- `AlertSeverity`
- `AppEvent`
- `Currency`
- `MediaType`
- `ServiceType`
- `MessageType`
- `GoalType`
- `ViewType`
- `WidyNetwork`
- `TtsType`
- `Gender`

## Build

```bash
npm run build
```

## Notes

- The `WidgetOutboundBridge` request timeout is currently fixed to `5000ms`.
- Messages are sent with `window.parent.postMessage(..., "*")`.

## License

ISC
