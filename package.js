Package.describe({
  name: 'ecosturmer:nojs-banner',
  version: '1.0.6',
  summary: 'Display a banner if JavaScript is disabled',
  git: 'https://github.com/sturmer-eha/meteor-nojs-banner.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');

  api.use([
    'templating'
  ], 'client');

  api.addFiles([
    'nojs.css',
    'yes.js'
  ], 'client');
});
