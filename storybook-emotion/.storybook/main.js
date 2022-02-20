const path = require('path')
const fs = require('fs')

module.exports = {
  features: {
    storyStoreV7: true,  //just for storybook to speed up
    buildStoriesJson: true, //just for storybook to speed up
    emotionAlias: false //necessary for emotion11 to work
  },
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  core: {
    builder: "webpack5"
  },
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  babel: async options => {
    options.plugins.unshift('babel-plugin-twin')
    options.presets.push('@emotion/babel-preset-css-prop')
    return options
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      '@emotion/core': getPackageDir('@emotion/react'),
      '@emotion/styled': getPackageDir('@emotion/styled'),
    }
    config.module.rules.push(babelConfig);
    return config
  },
}
const babelConfig = {
  // Config for js and jsx files
  test: /\.(js|jsx)$/,
  use: [
    {
      // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          // use @babel/preset-react for JSX and env (instead of staged presets)
          require.resolve("@babel/preset-react"),
          require.resolve("@babel/preset-env"),
          require.resolve('@emotion/babel-preset-css-prop')
        ],
        plugins: [
          require.resolve('babel-plugin-twin'),
          require.resolve('babel-plugin-macros'),
        ]
      },
    },
  ]
}

// Fix for package resolution
function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      )
    }
    currDir = dir
  }
}
