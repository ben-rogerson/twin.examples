// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// The folders containing files importing twin.macro
const includedDirs = [
  path.resolve(__dirname, 'app'),
  path.resolve(__dirname, 'src'),
]

module.exports = function withTwin(
  /** @type {import("next").NextConfig} */ nextConfig,
) {
  return {
    ...nextConfig,
    /**
     * @param {{ module: { rules?: any; }; resolve: { fallback: any; }; }} config
     * @param {{ dir: string; dev: boolean; isServer: boolean; buildId: string; config: any; defaultLoaders: { babel: any }; totalPages: number; webpack: any;nextRuntime?: 'nodejs' | 'edge'; }} options
     */
    webpack(config, options) {
      const { dev, isServer } = options
      // Make the loader work with the new app directory
      const patchedDefaultLoaders = options.defaultLoaders.babel
      patchedDefaultLoaders.options.hasServerComponents = false
      patchedDefaultLoaders.options.hasReactRefresh = false

      config.module = config.module || {}
      config.module.rules = config.module.rules || []
      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        use: [
          patchedDefaultLoaders,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              plugins: [
                require.resolve('babel-plugin-twin'),
                require.resolve('babel-plugin-macros'),
                [
                  require.resolve('babel-plugin-styled-components'),
                  { ssr: true, displayName: true },
                ],
                [
                  require.resolve('@babel/plugin-syntax-typescript'),
                  { isTSX: true },
                ],
              ],
            },
          },
        ],
      })

      if (!isServer) {
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          fs: false,
          module: false,
          path: false,
          os: false,
          crypto: false,
        }
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      } else {
        return config
      }
    },
  }
}
