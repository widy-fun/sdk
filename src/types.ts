import type {
	AlertVariant,
	AlertVariationConditions,
	AppEvent,
	Currency,
	Gender,
	GoalProgressLayout,
	GoalTextPosition,
	GoalType,
	MediaType,
	MessageType,
	NsfwLabel,
	Platform,
	RewardType,
	ServiceType,
	StreamElementsEventType,
	TextAnimation,
	TextAnimationVariant,
	TtsType,
	ViewType,
	WidyNetwork,
} from "./enums";

export interface IClientMessage {
	id: string;
	type: MessageType;
	donation?: IDonation;
	follow?: IFollow;
	subscription?: ISubscription;
	raid?: IRaid;
	redemption?: IRedemption;
	created_at: number;
}
export interface IDonation {
	id: string;
	service_id: string;
	message_id: string;
	amount: number;
	user_name: string;
	currency: Currency;
	text?: string;
	audio?: string;
	service: ServiceType;
	media?: IMedia;
	played: boolean;
	exchanged_amount: number;
	exchanged_currency: Currency;
	created_at: number;
}
export interface IFollow {
	id: string;
	service_id: string;
	message_id: string;
	user_name: string;
	user_id: string;
	service: ServiceType;
	played: boolean;
	followed_at: number;
}
export interface ISubscription {
	id: string;
	service_id: string;
	user_name: string;
	user_id: string;
	message_id: string;
	played: boolean;
	is_gift: boolean;
	is_anonymous: boolean;
	service: ServiceType;
	tier: string;
	cumulative_total: number;
	total: number;
	subscribed_at: number;
}
export interface IRaid {
	id: string;
	service_id: string;
	from_broadcaster_user_name: string;
	from_broadcaster_user_id: string;
	message_id: string;
	played: boolean;
	viewers: number;
	service: ServiceType;
	created_at: number;
}

export interface IPageParm {
	limit: number;
	offset: number;
}

export interface IMessagesFilter {
	exclude_donations: boolean;
	exclude_subscriptions: boolean;
	exclude_follows: boolean;
	exclude_raids: boolean;
	exclude_redemptions: boolean;
}

export interface IEventMessage<T> {
	event: AppEvent;
	data: T;
}
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface ISubscriptions {
	subscribers: ISubscriber[];
	notifySubscribers: <T>(id: string, data: T) => void;
	subscribe: <T>(id: string, callback: EventCallback<T>) => () => void;
}
export interface ISubscriber<T = any> {
	id: string;
	callback: EventCallback<T>;
}
export type EventCallback<T> = (data: T) => void;
export interface IAlert {
	id: string;
	audio?: string;
	audio_volume: number;
	view_type: ViewType;
	type: MessageType;
	image?: string;
	video?: string;
	video_volume: number;
	delay: number;
	duration: number;
	alert_variant: AlertVariant;
	group_id: string;
	name: string;
	variation_conditions: AlertVariationConditions;
	status: boolean;
	amount: number;
	title_style: ITextStyle;
	message_style: ITextStyle;
}
export interface ITextStyle {
	font_size: number;
	text_color: string;
	bold: boolean;
	italics: boolean;
	underline: boolean;
	letter_spacing: number;
	word_spacing: number;
	animation: TextAnimation;
	animation_variant: TextAnimationVariant;
}
export interface ISettings {
	id: number;
	moderation_duration: number;
	tts_volume: number;
	alert_paused: boolean;
	remove_links: boolean;
	black_list: string;
	language: string;
	currency: Currency;
	tts_type: TtsType;
	tts_settings?: IEdgeTtsSettings;
	widget_token: string;
}

export interface IAuctionSettings {
	id: number;
	leader_change_adding_time: number;
	new_lot_adding_time: number;
	new_donation_adding_time: number;
	timer_adding_time: number;
	is_greater_timer_adding_time: boolean;
	is_show_odds: boolean;
	is_show_total_sum: boolean;
	is_new_lot_adding_time: boolean;
	is_leader_change_adding_time: boolean;
	is_new_donation_adding_time: boolean;
}

export interface IMaptionSettings {
	id: number;
	price_for_meter: string;
	latitude: string;
	longitude: string;
	new_donation_adding_time: number;
	timer_adding_time: number;
	is_greater_timer_adding_time: boolean;
	is_new_donation_adding_time: boolean;
}

export interface IAlertsGroup {
	group_id: string;
	items: IAlert[];
}

export interface IMediaSettings {
	youtube: IMediaPlatformSettings;
	twitch: IMediaPlatformSettings;
	tiktok: IMediaPlatformSettings;
}
export interface IMediaPlatformSettings {
	enabled: boolean;
	min_amount: number;
	video_volume: number;
	min_views: number;
}
export interface IMedia {
	url: string;
	media_type: MediaType;
	expires?: number;
	temporary_src?: string;
}
export interface ILot {
	fastId: number;
	name: string;
	color: string;
	amount?: number;
	extra?: number;
	dropoutAmount?: number;
	dropoutOptionSize?: number;
	normalOptionSize?: number;
	winChancePercent?: string;
}

export interface IAucFighterGame {
	id: string;
	matches: IAucFighterMatch[];
}

export interface IAucFighterMatch {
	id: string;
	teams: IAucFighterTeam[];
	is_final: boolean;
	is_ended: boolean;
}

export interface IAucFighterTeam {
	id?: number;
	name?: string;
	color?: string;
	character?: number;
	is_winner: boolean;
	amount: number;
}

export interface IAucFighterMatchWinner {
	matchId: string;
	winnerIndex: number;
}

export interface IAucFighterSettings {
	id: number;
	round_duration: number;
	is_add_players: boolean;
}
export interface IImportedLot {
	fastId: number;
	id: string;
	extra: number | null;
	amount: number | null;
	name: string;
	investors: [];
}
export interface IEventsService extends ISubscriptions {
	connected: boolean;
	connect: () => void;
	disconnect: () => void;
	send: <T>(message: IEventMessage<T>) => void;
	addStatusListener: (listener: (connected: boolean) => void) => void;
	removeStatusListener: (listener: (connected: boolean) => void) => void;
}

export interface IGoal {
	id: string;
	title: string;
	amount_raise: number;
	start_raising: number;
	current_amount: number;
	end_date: number;
	start_date: number;
	type: GoalType;
	ended: boolean;
	bar_height: number;
	rounding_radius: number;
	bar_stroke_thickness: number;
	background_bar_color: string;
	progress_bar_color: string;
	goal_title_type: GoalTextPosition;
	goal_progress_bar: GoalTextPosition;
	remaining_time: GoalTextPosition;
	progress_bar_layout: GoalProgressLayout;
	goal_amount_limits: boolean;
	widget_background: boolean;
	widget_background_color: string;
	title_style: ITextStyle;
	progress_style: ITextStyle;
	limits_style: ITextStyle;
}
export interface IService<T = undefined, S = undefined> {
	id: ServiceType;
	authorized: boolean;
	auth: T;
	settings: S;
}
export interface IStreamElementsAuth {
	jwt_token: string;
}

export interface IDonationAlertsAuth {
	token: string;
}

export interface IDestreamAuth {
	overlayid: string;
}

export interface ITributeAuth {
	api_key: string;
}

export interface IDonatePayAuth {
	access_token: string;
}

export interface IStreamLabsAuth {
	jwt: string;
}
export interface IStreamElementsEvent<T> {
	channel: string;
	provider: string;
	type: StreamElementsEventType;
	createdAt: string;
	isMock?: boolean;
	data: T;
	updatedAt: string;
	_id: string;
	activityId: string;
	sessionEventsCount: number;
}

export interface IStreamElementsTip {
	amount: number;
	avatar: string;
	displayName?: string;
	username?: string;
	providerId: string;
	gifted: boolean;
	currency?: string;
	message?: string;
}
export interface IStreamElementsAuthenticated {
	clientId: string;
	channelId: string;
	project: string;
	message: string;
}
export interface ITwitchDeviceCodeResponse {
	device_code: string;
	expires_in: number;
	interval: number;
	user_code: string;
	verification_uri: string;
}

export interface IWidyAuth {
	donation_account_name: string;
	donation_account_address: string;
	user: string;
}

export interface IDeepLinkQueryParams {
	nonce: string | null;
	donation_account_name: string;
	donation_account_address: string;
	user: string;
	network: WidyNetwork;
}

export type MatchId = string;
export type MessageId = string;
export type DonationId = string;
export type AlertId = string;

export interface IEdgeTtsSettings {
	gender: Gender;
}

export type WidgetQuery =
	| "widgets:messages.read"
	| "widgets:goals.read"
	| "widgets:auc-fighter:settings.read"
	| "widgets:settings.read"
	| "widgets:alerts.read"
	| "widgets:view:storage.read"
	| "widgets:control:storage.read"
	| "widgets:media:settings.read";

export type WidgetMutation =
	| "widgets:auc-fighter:match-playing.send"
	| "widgets:auc-fighter:match-winner.send"
	| "widgets:auc-fighter:match-paused.send"
	| "widgets:auc-fighter:match-id.send"
	| "widgets:alert:played.send"
	| "widgets:alert:playing.send"
	| "widgets:media:played.send"
	| "widgets:media:end.send"
	| "widgets:media:playing.send"
	| "widgets:media:paused.send"
	| "widgets:media:error.send"
	| "widgets:media:replay.send"
	| "widgets:alert:replay.send"
	| "widgets:alert:skip.send"
	| "widgets:view:storage.write"
	| "widgets:control:storage.write";

export type WidgetSubscription =
	| "widgets:messages.subscription"
	| "widgets:goal.subscription"
	| "widgets:settings.subscription"
	| "widgets:auc-fighter:start-match.subscription"
	| "widgets:auc-fighter:pause-match.subscription"
	| "widgets:auc-fighter:resume-match.subscription"
	| "widgets:auc-fighter:cancel-match.subscription"
	| "widgets:auc-fighter:update-match.subscription"
	| "widgets:auc-fighter:settings.subscription"
	| "widgets:alert:replay.subscription"
	| "widgets:alert:skip.subscription"
	| "widgets:alert:test.subscription"
	| "widgets:alert:skip-playing.subscription"
	| "widgets:alert:alerts.subscription"
	| "widgets:media:replay.subscription"
	| "widgets:media:settings.subscription"
	| "widgets:media:skip.subscription"
	| "widgets:media:skip-playing-media.subscription"
	| "widgets:media:end.subscription"
	| "widgets:media:error.subscription"
	| "widgets:media:pause.subscription"
	| "widgets:media:play.subscription"
	| "widgets:alert:played.subscription"
	| "widgets:view:storage.subscription"
	| "widgets:control:storage.subscription"
	| "widgets:donation.subscription"
	| "widgets:redemption.subscription"
	| "widgets:chat-message.subscription"
	| "widgets:chat-message-delete.subscription"
	| "widgets:media.subscription"
	| "widgets:alert.subscription";

export type WidgetScopes = WidgetQuery | WidgetSubscription | WidgetMutation;

export interface IWidgetRequest<T = unknown> {
	id: string;
	scope: WidgetScopes;
	arg?: T;
}
export interface IWidgetResponse<T = unknown> {
	id: string;
	data?: T;
	error?: unknown;
}

export interface IWidget {
	id: string;
	manifest: IManifest;
	dev_path?: string;
	view_storage?: string;
	control_storage?: string;
}

export interface IManifest {
	manifest_version: number;
	id: string;
	name: string;
	version: string;
	authors: string[];
	description: string;
	repository: string;
	scopes: string[];
	csp?: ICsp;
}

export interface ICsp {
	connect_src?: string[];
	img_src?: string[];
	media_src?: string[];
}

export interface IWindowInfo {
	title: string;
	id: number;
	selected: boolean;
}

export interface INsfwSettings {
	id: number;
	labels_confidence: ILabelsConfidence;
	blur_timeout_duration: number;
}

export interface ILabelsConfidence {
	anus: number;
	make_love: number;
	nipple: number;
	penis: number;
	vagina: number;
}

export interface INsfwDetection {
	label: NsfwLabel;
	confidence: number;
}

export interface IReward {
	id: string;
	platform: Platform;
	type: RewardType;
	external_id?: string;
	title: string;
	description?: string;
	cost: number;
	background_color: string;
	is_user_input_required: boolean;
	image?: string;
	audio?: string;
	points_currency_ratio: number;
	video?: string;
	alert_variant: AlertVariant;
	audio_volume: number;
	video_volume: number;
	duration: number;
	delay: number;
	is_enabled: boolean;
	is_max_per_stream_enabled?: boolean;
	max_per_stream?: number;
	is_max_per_user_per_stream_enabled?: boolean;
	max_per_user_per_stream?: number;
	is_global_cooldown_enabled?: boolean;
	global_cooldown_seconds?: number;
	should_redemptions_skip_request_queue?: boolean;
}

export interface IRedemption {
	id: string;
	user_id: string;
	user_name: string;
	user_input?: string;
	reward_id: string;
	external_id: string;
	title: string;
	description?: string;
	cost: number;
	platform: Platform;
	type: RewardType;
	points_currency_ratio: number;
	media?: IMedia;
	image?: string;
	audio?: string;
	video?: string;
	alert_variant: AlertVariant;
	audio_volume: number;
	video_volume: number;
	duration: number;
	delay: number;
}

export type FragmentKind =
	| { kind: "Text" }
	| {
			kind: "Emote";
			id: string;
			emote_set_id: string | null;
			owner_id: string | null;
			formats: string[];
	  }
	| {
			kind: "Mention";
			user_id: string;
			username: string;
			login: string;
	  }
	| {
			kind: "Cheermote";
			prefix: string;
			bits: number;
			tier: number;
	  };

export type ChatMessageType =
	| { type: "Text" }
	| { type: "ChannelPointsHighlighted" }
	| { type: "ChannelPointsSubOnly" }
	| { type: "UserIntro" }
	| { type: "PowerUpMessageEffect" }
	| { type: "PowerUpGigantifiedEmote" }
	| {
			type: "SuperChat";
			amount_micros: number;
			currency: string;
			amount_display: string;
			tier: number;
	  }
	| {
			type: "SuperSticker";
			sticker_id: string;
			alt_text: string;
			amount_micros: number;
			currency: string;
			tier: number;
	  }
	| {
			type: "FanFunding";
			amount_micros: number;
			currency: string;
			amount_display: string;
	  }
	| {
			type: "MemberMilestone";
			member_month: number;
			level_name: string;
	  }
	| {
			type: "NewSponsor";
			level_name: string;
			is_upgrade: boolean;
	  }
	| {
			type: "MembershipGifting";
			count: number;
			level_name: string;
	  }
	| {
			type: "GiftMembershipReceived";
			level_name: string;
			gifter_channel_id: string;
			associated_message_id: string;
	  }
	| {
			type: "GiftEvent";
			gift_name: string;
			jewels_amount: number;
			has_visual_effect: boolean;
			combo_count: number;
	  }
	| {
			type: "Poll";
			question: string;
			options: IPollOption[];
			status: string;
	  }
	| {
			type: "UserBanned";
			ban_type: string;
			duration_seconds: number | null;
	  }
	| { type: "Unknown"; value: string };

export interface IPollOption {
	text: string;
	tally: string;
}

export interface IDeletedMessageUser {
	id: string;
	username: string;
	login: string;
}

export interface IModerationInfo {
	ai_moderated: boolean;
	violated_rules: string[];
}

export interface IUnifiedChatMessageDelete {
	platform: Platform;
	channel_id: string | null;
	message_id: string;
	target_user: IDeletedMessageUser | null;
}

export interface IUnifiedBadge {
	id: string;
	set_id: string;
	label: string | null;
	image_url?: string;
}

export interface ISenderRoles {
	is_broadcaster: boolean;
	is_moderator: boolean;
	is_subscriber: boolean;
	is_verified: boolean;
}

export interface IUnifiedSender {
	id: string;
	username: string;
	login: string;
	color: string | null;
	badges: IUnifiedBadge[];
	avatar_url: string | null;
	channel_url: string | null;
	is_verified: boolean | null;
	roles: ISenderRoles;
}

export interface IReplyInfo {
	parent_message_id: string;
	parent_message_body: string;
	parent_user_id: string;
	parent_username: string;
	thread_message_id: string | null;
	thread_user_id: string | null;
}

export interface IChatFragment {
	kind: FragmentKind;
	text: string;
}

export interface IDonationInfo {
	amount_micros: number;
	currency: string;
	amount_display: string;
	user_comment: string | null;
	tier: number | null;
}

export interface IUnifiedContent {
	text: string;
	fragments: IChatFragment[];
	message_type: ChatMessageType;
	reply: IReplyInfo | null;
	cheer_bits: number | null;
	donation: IDonationInfo | null;
}

export interface IUnifiedMetadata {
	raw_message_ref: string | null;
	channel_points_reward_id: string | null;
	source_channel_id: string | null;
	source_channel_login: string | null;
	source_message_id: string | null;
	is_source_only: boolean | null;
	live_chat_id: string | null;
	has_display_content: boolean | null;
}

export interface IUnifiedChatMessage {
	id: string;
	platform: Platform;
	channel_id: string;
	channel_name: string;
	sender: IUnifiedSender;
	content: IUnifiedContent;
	metadata: IUnifiedMetadata;
	created_at: string;
}
