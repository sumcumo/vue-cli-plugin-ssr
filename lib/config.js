module.exports = {
  api: null,
  service: null,
  port: null,
  host: null,
  entry: target => `./src/entry-${target}`,
  defaultTitle: 'My app',
  favicon: './public/favicon.ico',
  skipRequests: req => req.originalUrl === '/graphql',
  nodeExternalsWhitelist: [/\.css$/, /\?vue&type=style/],
  extendServer: null,
  copyUrlOnStart: true,
  // Paths
  distPath: null,
  error500Html: null,
  templatePath: null,
  serviceWorkerPath: null,
  directives: {},
}
