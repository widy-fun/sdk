import type { IAlert, IClientMessage } from "../types";

const getAlertFromMessage = (message: IClientMessage) => {
	return (
		message.donation?.alert ||
		message.follow?.alert ||
		message.subscription?.alert ||
		message.raid?.alert ||
		message.redemption?.alert ||
		message.command_action?.alert ||
		(message.assistant_action?.data as IAlert | undefined)
	);
};
export default getAlertFromMessage;
