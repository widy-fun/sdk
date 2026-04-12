# @widy/sdk

A TypeScript SDK for Widy widget integrations.

This package exports shared enum and type definitions, plus a `WidgetOutboundBridge` helper for sending structured messages from iframe widgets to their parent window.

## Installation

```bash
npm install @widy/sdk
```

## Package Exports

- `WidgetOutboundBridge` - the main bridge class for widget outbound communication
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
