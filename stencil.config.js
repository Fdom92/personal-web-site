const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js',
        globPatterns: [
          '**/*.{js,css,json,html,ico,png,jpeg}'
        ],
        globIgnores: [
          'build/app/svg/*.js',
          'build/app/*.es5.js'
        ]
      }
    }
  ],
  globalStyle: 'src/global/app.css',
  copy: [
    { src: 'robots.txt' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
