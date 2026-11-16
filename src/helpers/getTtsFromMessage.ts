import type { IClientMessage } from "../types";

const getTtsFromMessage = (message: IClientMessage) => {
	return message.command_action?.tts || message.redemption?.tts;
};
export default getTtsFromMessage;
