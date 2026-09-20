export enum AlertSeverity {
	error = "error",
	info = "info",
	success = "success",
	warning = "warning",
}
export enum Language {
	en = "en",
	es = "es",
	de = "de",
	zh = "zh",
	fr = "fr",
	hi = "hi",
	ar = "ar",
	pt = "pt",
	ru = "ru",
	ua = "ua",
}

export enum AppEvent {
	Message = "Message",
	Media = "Media",
	SkipAlert = "SkipAlert",
	ReplayAlert = "ReplayAlert",
	AlertPlaying = "AlertPlaying",
	AlertPlayed = "AlertPlayed",
	MediaPlaying = "MediaPlaying",
	SkipPlayingMedia = "SkipPlayingMedia",
	SkipPlayingAlert = "SkipPlayingAlert",
	MediaEnd = "MediaEnd",
	MediaError = "MediaError",
	MediaPaused = "MediaPaused",
	PauseMedia = "PauseMedia",
	MediaPlayed = "MediaPlayed",
	PlayMedia = "PlayMedia",
	SkipMedia = "SkipMedia",
	ReplayMedia = "ReplayMedia",
	UpdateAlert = "UpdateAlert",
	MakeAudioError = "MakeAudioError",
	Settings = "Settings",
	MediaSettings = "MediaSettings",
	StartAucFighterMatch = "StartAucFighterMatch",
	AucFighterMatchEnd = "AucFighterMatchEnd",
	PauseAucFighterMatch = "PauseAucFighterMatch",
	ResumeAucFighterMatch = "ResumeAucFighterMatch",
	AucFighterMatchPlaying = "AucFighterMatchPlaying",
	AucFighterMatchPaused = "AucFighterMatchPaused",
	UpdateAucFighterMatch = "UpdateAucFighterMatch",
	CancelAucFighterMatch = "CancelAucFighterMatch",
	AucFighterSettings = "AucFighterSettings",
	Goal = "Goal",
	CreateDonationAccount = "CreateDonationAccount",
	WidgetViewStorage = "WidgetViewStorage",
	WidgetControlStorage = "WidgetControlStorage",
	NsfwDetection = "NsfwDetection",
	NsfwSettings = "NsfwSettings",
	Alert = "Alert",
	Donation = "Donation",
	Redemption = "Redemption",
	ChatMessage = "ChatMessage",
	ChatMessageDelete = "ChatMessageDelete",
	CommandAction = "CommandAction",
	TtsPlayed = "TtsPlayed",
	TtsPlaying = "TtsPlaying",
	ReplayTts = "ReplayTts",
	SkipTts = "SkipTts",
	SkipPlayingTts = "SkipPlayingTts",
	StartTranscribe = "StartTranscribe",
	StopTranscribe = "StopTranscribe",
	AssistantAction = "AssistantAction",
}
export enum StreamElementsEvent {
	Connect = "Connect",
	Authenticated = "Authenticated",
}

export enum ViewType {
	Top = "Top",
	Bottom = "Bottom",
	Left = "Left",
	Right = "Right",
	Overlay = "Overlay",
}
export enum Currency {
	UAH = "UAH",
	RUB = "RUB",
	EUR = "EUR",
	USD = "USD",
	BRL = "BRL",
	TRY = "TRY",
	BYN = "BYN",
	KZT = "KZT",
	AUD = "AUD",
	CAD = "CAD",
	CZK = "CZK",
	DKK = "DKK",
	HKD = "HKD",
	ILS = "ILS",
	MYR = "MYR",
	MXN = "MXN",
	NOK = "NOK",
	NZD = "NZD",
	PHP = "PHP",
	PLN = "PLN",
	GBP = "GBP",
	SGD = "SGD",
	SEK = "SEK",
	CHF = "CHF",
	THB = "THB",
	NONE = "NONE",
}

export enum MediaType {
	Youtube = "Youtube",
	Twitch = "Twitch",
	TikTok = "TikTok",
}
export enum WheelVariant {
	normal = "normal",
	dropout = "dropout",
}
export enum AlertVariationConditions {
	Random = "Random",
	AmountIsGreater = "AmountIsGreater",
	AmountIsEqual = "AmountIsEqual",
}
export enum GoalTextPosition {
	OnTop = "OnTop",
	Inside = "Inside",
	Below = "Below",
	DoNotDisplay = "DoNotDisplay",
}
export enum GoalProgressLayout {
	Percent = "Percent",
	CurrentAmount = "CurrentAmount",
	CurrentAmountPercent = "CurrentAmountPercent",
	CurrentAmountRemainingAmount = "CurrentAmountRemainingAmount",
	CurrentAmountRemainingAmountPercent = "CurrentAmountRemainingAmountPercent",
}
export enum ServiceType {
	Streamelements = "Streamelements",
	Twitch = "Twitch",
	WidySol = "WidySol",
	WidyTon = "WidyTon",
	DonationAlerts = "DonationAlerts",
	StreamLabs = "StreamLabs",
	Donatello = "Donatello",
	Donatik = "Donatik",
	DonatePay = "DonatePay",
	Destream = "Destream",
	Tribute = "Tribute",
	Kick = "Kick",
	KickBot = "KickBot",
	TwitchBot = "TwitchBot",
	Gemini = "Gemini",
	OpenAI = "OpenAI",
	Claude = "Claude",
	KickSession = "KickSession",
}

export enum Platform {
	Twitch = "Twitch",
	Kick = "Kick",
}

export enum StreamElementsEventType {
	tip = "tip",
}

export enum MessageType {
	Donation = "Donation",
	Subscription = "Subscription",
	Follow = "Follow",
	Raid = "Raid",
	Redemption = "Redemption",
	CommandAction = "CommandAction",
	AssistantAction = "AssistantAction",
}
export enum GoalType {
	Donation = "Donation",
	TwitchSubscription = "TwitchSubscription",
	TwitchFollow = "TwitchFollow",
	KickSubscription = "KickSubscription",
}

export enum WidyNetwork {
	Sol = "sol",
	Ton = "ton",
}

export enum TtsType {
	Google = "Google",
	Edge = "Edge",
	Piper = "Piper",
}

export enum Gender {
	Male = "Male",
	Female = "Female",
}

export enum NsfwLabel {
	anus = "anus",
	make_love = "make_love",
	nipple = "nipple",
	penis = "penis",
	vagina = "vagina",
}

export enum RewardType {
	Media = "Media",
	Auction = "Auction",
	Alert = "Alert",
	TTS = "TTS",
}

export enum AlertVariant {
	ImageAndAudio = "ImageAndAudio",
	Image = "Image",
	Audio = "Audio",
	Video = "Video",
}

export enum TextAnimation {
	No = "No",
}

export enum TextAnimationVariant {
	AllText = "AllText",
}

export enum CommandSourceType {
	Chat = "Chat",
	Timer = "Timer",
	None = "None",
}

export enum UserLevel {
	Streamer = "Streamer",
	Moderator = "Moderator",
	Vip = "Vip",
	Subscriber = "Subscriber",
	Anyone = "Anyone",
}

export enum PostType {
	Normal = "Normal",
	Announcement = "Announcement",
}

export enum AppError {
	HttpRequest = "HttpRequest",
	HttpStatus = "HttpStatus",
	ParseError = "ParseError",
	Config = "Config",
	DbError = "DbError",
	Zip = "Zip",
	WidySol = "WidySol",
	StreamLabs = "StreamLabs",
	Websocket = "Websocket",
	NSFW = "NSFW",
	Custom = "Custom",
	Io = "Io",
	Internet = "Internet",
	Piper = "Piper",
	STT = "STT",
	Audio = "Audio",
	Ort = "Ort",
}

export enum ToolCallingProvider {
	Gemini = "Gemini",
	Claude = "Claude",
	OpenAI = "OpenAI",
	Local = "Local",
}

export enum AssistantServiceStatus {
	Stopped = "Stopped",
	Stopping = "Stopping",
	Starting = "Starting",
	Started = "Started",
	DownloadingModel = "DownloadingModel",
}

export enum AssistantActionType {
	BanUser = "BanUser",
	UnbanUser = "UnbanUser",
	PlayAlert = "PlayAlert",
	PinMessage = "PinMessage",
	ChangeChannelTitle = "ChangeChannelTitle",
	ChangeChannelCategory = "ChangeChannelCategory",
	AddFollowMode = "AddFollowMode",
	RemoveFollowMode = "RemoveFollowMode",
	AddEmotesMode = "AddEmotesMode",
	RemoveEmotesMode = "RemoveEmotesMode",
	AddSubscribersMode = "AddSubscribersMode",
	RemoveSubscribersMode = "RemoveSubscribersMode",
	AddSlowMode = "AddSlowMode",
	RemoveSlowMode = "RemoveSlowMode",
	PlayMedia = "PlayMedia",
}
