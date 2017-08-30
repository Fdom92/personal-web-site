exports.config = {
    bundles: [
      { components: ['web-site'] },
      { components: ['web-header'] },
      { components: ['my-info'] },
      { components: ['my-projects', 'single-project', 'tech-chip'] },
      { components: ['my-experience'] },
      { components: ['my-cv'] },
      { components: ['my-hobbies'] },
      { components: ['web-footer'] }
    ]
  };

  exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
  }