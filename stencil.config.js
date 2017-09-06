exports.config = {
    bundles: [
      { components: ['web-header', 'my-info', 'my-projects', 'my-experience', 'my-cv', 'my-hobbies', 'web-footer'] },
      { components: ['web-site', 'single-project', 'tech-chip', 'single-hobby'] }
    ],
    collections: [
      {name: 'st-img'}
    ]
  };

  exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
  }