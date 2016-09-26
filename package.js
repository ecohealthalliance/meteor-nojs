Package.describe({
  name: 'eha:nojs',
  version: '1.0.2',
  summary: 'Display a banner if javascript is disabled',
  git: 'https://github.com/ecohealthalliance/meteor-nojs.git',
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
