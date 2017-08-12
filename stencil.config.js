exports.config = {
    bundles: [
      { components: ['web-site'] },
      { components: ['web-header'] },
      { components: ['my-info'] },
      { components: ['my-projects'] },
      { components: ['my-experience'] },
      { components: ['my-hobbies'] },
      { components: ['web-footer'] }
    ]
  };
  
  exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
  }