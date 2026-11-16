import { ServiceType } from "../enums";

const favicon = (domain: string) =>
	`https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const serviceImages: Record<ServiceType, string> = {
	[ServiceType.Streamelements]: favicon("streamelements.com"),
	[ServiceType.Twitch]: favicon("twitch.tv"),
	[ServiceType.TwitchBot]: favicon("twitch.tv"),
	[ServiceType.WidySol]: favicon("widy.fun"),
	[ServiceType.WidyTon]: favicon("widy.fun"),
	[ServiceType.DonationAlerts]: favicon("donationalerts.com"),
	[ServiceType.StreamLabs]: favicon("streamlabs.com"),
	[ServiceType.Donatello]: favicon("donatello.to"),
	[ServiceType.Donatik]: favicon("donatik.ua"),
	[ServiceType.DonatePay]: favicon("donatepay.ru"),
	[ServiceType.Destream]: favicon("destream.net"),
	[ServiceType.Tribute]: favicon("tribute.top"),
	[ServiceType.Kick]: favicon("kick.com"),
	[ServiceType.KickBot]: favicon("kick.com"),
	[ServiceType.KickSession]: favicon("kick.com"),
	[ServiceType.Gemini]: favicon("gemini.google.com"),
	[ServiceType.OpenAI]: favicon("openai.com"),
	[ServiceType.Claude]: favicon("claude.ai"),
	[ServiceType.FishAudio]: favicon("fish.audio"),
	[ServiceType.TelegramBot]: favicon("telegram.org"),
	[ServiceType.Obs]: favicon("obsproject.com"),
};

const getServiceImageByServiceType = (type?: ServiceType) =>
	type ? serviceImages[type] : undefined;

export default getServiceImageByServiceType;
