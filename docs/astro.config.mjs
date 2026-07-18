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
		// Matomo (self-hosted at a.flowcourier.com, cookieless) on every page.
		// Starlight uses full-page navigation, so trackPageView fires per load.
		head: [
			{
				tag: 'script',
				content: [
					'var _paq = window._paq = window._paq || [];',
					'_paq.push(["disableCookies"]);',
					"_paq.push(['trackPageView']);",
					"_paq.push(['enableLinkTracking']);",
					'(function() {',
					'  var u="//a.flowcourier.com/";',
					"  _paq.push(['setTrackerUrl', u+'matomo.php']);",
					"  _paq.push(['setSiteId', '16']);",
					"  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];",
					"  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);",
					'})();',
				].join('\n'),
			},
			{
				tag: 'noscript',
				content:
					'<p><img referrerpolicy="no-referrer-when-downgrade" ' +
					'src="//a.flowcourier.com/matomo.php?idsite=16&amp;rec=1" ' +
					'style="border:0;" alt="" /></p>',
			},
		],
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
