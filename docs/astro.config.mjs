// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({

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
                label: 'Getting Started',
                autogenerate: { directory: 'start-here' },
            },
            {
                label: 'Developer Guide',
                autogenerate: { directory: 'developer-guide' },
            }
            
            
        ],
		}), tailwind()],
});