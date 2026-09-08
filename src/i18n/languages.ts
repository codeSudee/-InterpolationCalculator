// Supported locales and their native display names, used for the language switcher
// and for generating hreflang alternate links.

export const languages = {
	en: "English",
	es: "Español",
	ja: "日本語",
	fr: "Français",
	de: "Deutsch",
	pt: "Português",
	ko: "한국어",
	it: "Italiano",
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = "en";

export const locales = Object.keys(languages) as Locale[];
