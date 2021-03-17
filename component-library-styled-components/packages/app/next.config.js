const path = require('path')
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config')

/**
 * next-transpile-modules
 * Makes Next.js run babel over code that's imported from the `shared-ui`
 * package.
 * https://github.com/kutlugsahin/next-transpile-modules
 */
const PACKAGE_NAMES = ['shared-ui'] // Add new packages to this array when imported into this app
const withTM = require('next-transpile-modules')(PACKAGE_NAMES)

module.exports = withCustomBabelConfigFile(
  withTM({
    // Use the root babel config
    babelConfigFile: path.resolve('../../babel.config.js'),

    webpack: (config, { isServer }) => {
      // Fix packages that depend on fs/module module
      if (!isServer) {
        config.node = { fs: 'empty', module: 'empty' }
      }

      return config
    },
  }),
)
