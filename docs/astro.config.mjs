// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://flowcourier.com/docs/',
    base: '/docs/',
    
    integrations: [starlight({
        title: 'Flowcourier Support',
		logo: {
			light: '/src/assets/logo-text.svg',
			dark: '/src/assets/logo-text-dark.svg',
			replacesTitle: true,
		},
        social: {
            github: 'https://github.com/flowcourier/Flowcourier.Umbraco.Support',
        },
		customCss: [
			// Path to your Tailwind base styles:
			'./src/tailwind.css',
		  ],
        sidebar: [
            {
                label: 'Analytics',
                items: [
                    {
                        label: 'Getting Started',
                        autogenerate: { directory: 'start-here' },
                    },
                    {
                        label: 'Install Guide',
                        autogenerate: { directory: 'install-guide' },
                    },
                    {
                        label: 'FAQ',
                        autogenerate: { directory: 'faq' },
                    },
                ],
            },
            {
                label: 'Cookie Consent',
                items: [
                    {
                        label: 'Getting Started',
                        autogenerate: { directory: 'cookie-consent/start-here' },
                    },
                    {
                        label: 'Guides',
                        autogenerate: { directory: 'cookie-consent/guides' },
                    },
                    {
                        label: 'FAQ',
                        autogenerate: { directory: 'cookie-consent/faq' },
                    },
                ],
            },
        ],
        pagefind:false,
		}), tailwind()],
});