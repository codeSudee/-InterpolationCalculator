// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { landingPages } from './src/data/landing-pages.ts';

// Real last-change dates, known only for the landing pages (see src/data/landing-pages.ts).
const lastmodByUrl = new Map(landingPages.map((p) => [`https://interpcalc.com/${p.slug}/`, p.updated]));

// https://astro.build/config
export default defineConfig({
	site: 'https://interpcalc.com',
	i18n: {
		locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en',
					es: 'es',
					ja: 'ja',
					fr: 'fr',
					de: 'de',
					pt: 'pt',
					ko: 'ko',
					it: 'it',
				},
			},
			filter: (page) => !page.includes('/404') && !page.includes('/500'),
			serialize(item) {
				const lastmod = lastmodByUrl.get(item.url);
				if (lastmod) {
					item.lastmod = lastmod;
					// English-only pages have no translated counterparts to point hreflang at.
					item.links = undefined;
				}
				return item;
			},
		}),
	],
});
