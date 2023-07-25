const withTwin = require('./withTwin.js')

module.exports = withTwin({
  transpilePackages: ['shared-ui'], // Add new packages to this array when imported into this app
  reactStrictMode: true,
})
