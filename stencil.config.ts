import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    plugins: [
        sass()
    ],
    outputTargets: [
        {
            type: 'www',
            baseUrl: 'https://ferolmo.com/',
            serviceWorker: {
                globPatterns: [
                    '**/*.{js,css,json,html,ico,png,jpeg}'
                ],
                globIgnores: [
                    'build/app/svg/*.js',
                    'build/app/*.es5.js'
                ]
            },
            copy: [
                { src: 'robots.txt' },
                { src: 'manifest.json' }
            ]
        }
    ]
};