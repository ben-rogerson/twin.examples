const path = require('path')

/**
 * next-transpile-modules
 * Makes Next.js run babel over code that's imported from the `shared-ui`
 * package.
 * https://github.com/kutlugsahin/next-transpile-modules
 */
const PACKAGE_NAMES = ['shared-ui'] // Add new packages to this array when imported into this app
const withTranspileModules = require('next-transpile-modules')(PACKAGE_NAMES)

module.exports = withTranspileModules({
  webpack: (config, { isServer }) => {
    // Fix packages that depend on fs/module imports (updated for webpack 5)
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.module = false
    }

    // Make the Next.js Babel loader use the root config 
    const babelConfigFile = path.resolve('../../babel.config.js')
    const isBabelLoader = (loader) => {
      return loader && (
        loader === 'next-babel-loader' ||
        loader.replace(/\\/g, '/').match('/next/dist/build/babel/loader/index.js$')
      )
    }
    config.module.rules.forEach((rule) => {
      if (rule.use) {
        if (Array.isArray(rule.use)) {
          const babelLoader = rule.use.find(use => typeof use === 'object' && isBabelLoader(use.loader));
          if (babelLoader && babelLoader.options) {
            babelLoader.options.configFile = babelConfigFile
          }
        } else if (isBabelLoader(rule.use.loader)) {
          rule.use.options.configFile = babelConfigFile
        }
      }
    })

    return config
  },
})

