// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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
		}),
	],
});
