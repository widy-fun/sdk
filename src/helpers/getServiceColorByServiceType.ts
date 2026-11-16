import { ServiceType } from "../enums";

const serviceColors: Record<ServiceType, string> = {
	[ServiceType.Streamelements]: "#2701fb",
	[ServiceType.Twitch]: "#9147ff",
	[ServiceType.WidySol]: "#370161",
	[ServiceType.WidyTon]: "#0098ea",
	[ServiceType.DonationAlerts]: "#f57d07",
	[ServiceType.StreamLabs]: "#80f5d2",
	[ServiceType.Donatello]: "#3579f6",
	[ServiceType.Donatik]: "#7a44ed",
	[ServiceType.DonatePay]: "#44ab4f",
	[ServiceType.Destream]: "#f05a00",
	[ServiceType.Tribute]: "#2692ffb2",
	[ServiceType.Kick]: "#53fc18",
	[ServiceType.KickBot]: "#53fc18",
	[ServiceType.TwitchBot]: "#9147ff",
	[ServiceType.Gemini]: "#121a3a",
	[ServiceType.OpenAI]: "#000000",
	[ServiceType.Claude]: "#d97757",
	[ServiceType.KickSession]: "#53fc18",
	[ServiceType.FishAudio]: "#f0f3ef",
	[ServiceType.TelegramBot]: "#24a1de",
	[ServiceType.Obs]: "#0c0c0ce7",
};

const getServiceColorByServiceType = (type?: ServiceType) =>
	type ? serviceColors[type] : undefined;

export default getServiceColorByServiceType;
