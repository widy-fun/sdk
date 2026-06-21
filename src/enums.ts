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
	Alerts = "Alerts",
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
	TestAlert = "TestAlert",
	Goal = "Goal",
	CreateDonationAccount = "CreateDonationAccount",
	WidgetViewStorage = "WidgetViewStorage",
	WidgetControlStorage = "WidgetControlStorage",
	NsfwDetection = "NsfwDetection",
	NsfwSettings = "NsfwSettings",
	Alert = "Alert",
	Donation = "Donation",
	Redemption = "Redemption",
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
}

export enum Platform {
	Twitch = "Twitch",
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
}
export enum GoalType {
	Donation = "Donation",
	TwitchSubscription = "TwitchSubscription",
	TwitchFollow = "TwitchFollow",
}

export enum WidyNetwork {
	Sol = "sol",
	Ton = "ton",
}

export enum TtsType {
	Google = "Google",
	Edge = "Edge",
}

export enum Gender {
	Male = "Male",
	Female = "Edge",
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
