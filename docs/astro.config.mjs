// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://flowcourier.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'Flowcourier Support',
			social: {
				github: 'https://github.com/flowcourier/Flowcourier.Umbraco.Support',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Google Analytics for Umbraco',
					autogenerate: { directory: 'google-analytics-for-umbraco' },
				},
			],
		}),
	],
});
