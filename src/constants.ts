import { TextAnimation, TextAnimationVariant } from "./enums";
import type { ITextStyle } from "./types";

export const DEFAULT_TEXT_STYLE: ITextStyle = {
	font_size: 60,
	text_color: "rgb(255,255,255,1)",
	bold: true,
	italics: false,
	underline: false,
	letter_spacing: 0,
	word_spacing: 0,
	animation: TextAnimation.No,
	animation_variant: TextAnimationVariant.AllText,
};
