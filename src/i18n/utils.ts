import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLocale, languages, type Locale } from "./languages";
import type { Dictionary } from "./dictionary";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { ja } from "./locales/ja";
import { fr } from "./locales/fr";
import { de } from "./locales/de";
import { pt } from "./locales/pt";
import { ko } from "./locales/ko";
import { it } from "./locales/it";

export const dictionaries: Record<Locale, Dictionary> = { en, es, ja, fr, de, pt, ko, it };

export function getDictionary(locale: Locale): Dictionary {
	return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/** Build a link to the given path for the given locale, honoring the unprefixed default locale. */
export function localizedPath(locale: Locale, path: string = "/"): string {
	return getRelativeLocaleUrl(locale, path === "/" ? "" : path);
}

export { languages, defaultLocale };
export type { Locale };
