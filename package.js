Package.describe({
  name: 'reactrouter:react-router-ssr',
  version: '2.0.3',
  summary: 'Server-side rendering for react-router and react-meteor-data rehydratating Meteor subscriptions',
  git: 'https://github.com/thereactivestack/meteor-react-router-ssr.git',
  documentation: 'README.md'
});

Npm.depends({
  'cookie-parser': '1.3.5',
  'cheerio': '0.19.0'
});

Package.onUse(function(api) {
  api.use([
    'jsx@0.2.3',
    'minimongo@1.0.0',
    'react-meteor-data@0.2.4',
    'react-runtime@0.14.0',
    'reactrouter:react-router@2.0.0',
    'meteorhacks:fast-render@2.12.0',
    'meteorhacks:inject-data@2.0.0',
  ]);

  api.use('webapp@1.2.0', 'server');
  api.use('underscore@1.0.3', 'server');
  api.use('mongo@1.0.0', 'server');
  api.use('autopublish@1.0.0', 'server', {weak: true});

  api.use('nfl:react-helmet@2.2.0', 'server', {weak: true});
  api.use('promise@0.5.1', 'server', {weak: true});

  api.use('tmeasday:publish-counts@0.7.0', 'server', {weak: true});

  api.imply(['reactrouter:react-router@2.0.0']);

  api.use(['routepolicy@1.0.5'], ['server']);

  api.add_files(['lib/react-router-ssr.js']);

  api.add_files(['lib/client.jsx'], 'client');
  api.add_files(['lib/server.jsx'], 'server');

  api.export('ReactRouterSSR');
});
