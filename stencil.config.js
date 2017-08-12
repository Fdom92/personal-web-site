exports.config = {
    bundles: [
      { components: ['web-site'] }
    ]
  };
  
  exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
  }