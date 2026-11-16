import type { IClientMessage, IMedia } from "../types";

const getMediaFromMessage = (message?: IClientMessage) => {
	const media = message?.assistant_action?.data as IMedia | undefined;
	return message?.donation?.media || message?.redemption?.media || media;
};
export default getMediaFromMessage;
