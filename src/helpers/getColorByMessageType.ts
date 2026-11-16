import { MessageType } from "../enums";

const messageColors: Record<MessageType, string> = {
	[MessageType.Donation]: "#ffca28",
	[MessageType.Subscription]: "#FF4500",
	[MessageType.GiftSubscription]: "#c300ff",
	[MessageType.Follow]: "#B2DFDB",
	[MessageType.Raid]: "#00ffbfff",
	[MessageType.Redemption]: "#5C7E8C",
	[MessageType.CommandAction]: "#00fc86",
	[MessageType.AssistantAction]: "#459b14",
};

const getColorByMessageType = (type: MessageType) => messageColors[type];

export default getColorByMessageType;
