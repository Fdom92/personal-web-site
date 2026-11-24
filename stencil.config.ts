import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    globalStyle: 'src/global/app.css',
    plugins: [
        sass()
    ],
    outputTargets: [
        {
            type: 'www',
            baseUrl: 'https://ferolmo.com/',
            serviceWorker: {
                globPatterns: [
                    '**/*.{js,css,json,html,ico,png,jpeg,webp,avif,woff2}'
                ],
                globIgnores: [
                    'build/app/svg/*.js',
                    'build/app/*.es5.js',
                    'assets/icon/*',
                    'assets/og-card.png',
                    'assets/Fdom-portrait.png'
                ]
            },
            copy: [
                { src: 'robots.txt' },
                { src: 'sitemap.xml' },
                { src: 'manifest.json' }
            ]
        }
    ]
};