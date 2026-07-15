// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/flowcourier/Flowcourier.Umbraco.Support' },
        ],
		customCss: [
			'./src/styles/custom.css',
		],
        sidebar: [
            {
                label: 'Analytics',
                items: [
                    {
                        label: 'Getting Started',
                        items: [{ autogenerate: { directory: 'start-here' } }],
                    },
                    {
                        label: 'Install Guide',
                        items: [{ autogenerate: { directory: 'install-guide' } }],
                    },
                    {
                        label: 'FAQ',
                        items: [{ autogenerate: { directory: 'faq' } }],
                    },
                ],
            },
            {
                label: 'AI Agents',
                items: [
                    {
                        label: 'Getting Started',
                        items: [{ autogenerate: { directory: 'ai/start-here' } }],
                    },
                    {
                        label: 'Guides',
                        items: [{ autogenerate: { directory: 'ai/guides' } }],
                    },
                ],
            },
            {
                label: 'AEO',
                items: [
                    {
                        label: 'Getting Started',
                        items: [{ autogenerate: { directory: 'aeo/start-here' } }],
                    },
                    {
                        label: 'Guides',
                        items: [{ autogenerate: { directory: 'aeo/guides' } }],
                    },
                ],
            },
            {
                label: 'Cookie Consent',
                items: [
                    {
                        label: 'Getting Started',
                        items: [{ autogenerate: { directory: 'cookie-consent/start-here' } }],
                    },
                    {
                        label: 'Guides',
                        items: [{ autogenerate: { directory: 'cookie-consent/guides' } }],
                    },
                    {
                        label: 'FAQ',
                        items: [{ autogenerate: { directory: 'cookie-consent/faq' } }],
                    },
                ],
            },
        ],
        pagefind: false,
		})],
});
