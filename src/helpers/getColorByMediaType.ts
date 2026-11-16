import { MediaType } from "../enums";

const mediaColors: Record<MediaType, string> = {
	[MediaType.Youtube]: "#c4302b",
	[MediaType.Twitch]: "#9146FF",
	[MediaType.TikTok]: "#00f2ea",
	[MediaType.Kick]: "#53fc18",
};

const getColorByMediaType = (mediaType: MediaType) => mediaColors[mediaType];

export default getColorByMediaType;
