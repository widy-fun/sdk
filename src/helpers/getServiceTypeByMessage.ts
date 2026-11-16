import { MessageType, type ServiceType } from "../enums";
import type {
	IChanelData,
	IChatSettingsData,
	IClientMessage,
	ICommandAction,
	IDonation,
	IFollow,
	IPinedMessageData,
	IRaid,
	IRedemption,
	ISubscription,
	IUserData,
} from "../types";

const getServiceTypeByMessage = (
	message: IClientMessage,
): ServiceType | undefined => {
	switch (message.type) {
		case MessageType.Donation: {
			const donation = message.donation as IDonation;
			return donation.service;
		}
		case MessageType.Follow: {
			const follow = message.follow as IFollow;
			return follow.service;
		}
		case MessageType.Subscription: {
			const subscription = message.subscription as ISubscription;
			return subscription.service;
		}
		case MessageType.GiftSubscription: {
			const subscription = message.subscription as ISubscription;
			return subscription.service;
		}
		case MessageType.Raid: {
			const raid = message.raid as IRaid;
			return raid.service;
		}
		case MessageType.Redemption: {
			const redemption = message.redemption as IRedemption;
			return redemption.platform as unknown as ServiceType;
		}
		case MessageType.CommandAction: {
			const commandAction = message.command_action as ICommandAction;
			return commandAction.platform as unknown as ServiceType;
		}
		case MessageType.AssistantAction: {
			const data = message.assistant_action?.data as
				| IUserData
				| IPinedMessageData
				| IChanelData
				| IChatSettingsData;
			return data.platform as unknown as ServiceType;
		}
	}
};
export default getServiceTypeByMessage;
