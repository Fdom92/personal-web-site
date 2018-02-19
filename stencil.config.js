exports.config = {
    collections: [
      {name: 'st-img'}
    ],
    serviceWorker: {
      swSrc: 'src/sw.js'
    }
  };

  exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
  }