# Twin + Next.js + Emotion

<p><a href="https://github.com/ben-rogerson/twin.macro#gh-light-mode-only" target="_blank"><img src="../.github/twin-light.svg" alt="Twin" width="60" height="70"></a><a href="https://github.com/ben-rogerson/twin.macro#gh-dark-mode-only" target="_blank"><img src="../.github/twin-dark.svg" alt="Twin" width="60" height="70"></a><a href="https://nextjs.org#gh-light-mode-only" target="_blank"><img src="../.github/next-light.svg" alt="Next.js" width="80" height="70"></a><a href="https://nextjs.org#gh-dark-mode-only" target="_blank"><img src="../.github/next-dark.svg" alt="Next.js" width="80" height="70"></a><a href="https://emotion.sh/docs/introduction" target="_blank"><img src="../.github/emotion.svg" alt="Emotion" width="60" height="70"></a>
</p>

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/next-emotion folder-name
```

From within the new folder, run `npm install`, then `npm run dev` to start the dev server.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [SSR styles setup](#ssr-styles-setup)
  - [Add the twin config (optional)](#add-the-twin-config-optional)
  - [Add the next babel config](#add-the-next-babel-config)
- [Customization](#customization)
- [Next steps](#next-steps)

[](#getting-started)

## Getting started

### Installation

Install Next.js

Choose "Yes" for the `src/` directory option when prompted.

```shell
npx create-next-app@latest --javascript
```

Install the dependencies

```shell
npm install @emotion/react @emotion/styled
npm install -D twin.macro tailwindcss @emotion/babel-plugin babel-plugin-macros @babel/preset-react babel-loader babel-plugin-macros
```

<details>
  <summary>Install with Yarn</summary>

Choose "Yes" for the `src/` directory option when prompted.

```shell
yarn create next-app
```

Install the dependencies

```shell
yarn add @emotion/react @emotion/styled
yarn add -D twin.macro tailwindcss @emotion/babel-plugin babel-plugin-macros
```

</details>

### Add the global styles

Twin uses the same preflight base styles as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles, some @keyframes for animations, and some global css variables.

You can import `GlobalStyles` within a new file placed in `styles/GlobalStyles.js`:

```js
// src/styles/GlobalStyles.js
import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
```

Then import the GlobalStyles file in `src/pages/_app.js`:

```js
// src/pages/_app.js
import GlobalStyles from '../styles/GlobalStyles'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
```

### Add the twin config (optional)

Twin’s config can be added in a couple of different files.

a) Either in `babel-plugin-macros.config.js`:

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'emotion',
  },
}
```

b) Or in `package.json`:

```json
// package.json
"babelMacros": {
  "twin": {
    "preset": "emotion"
  }
},
```

Note: The preset gets set to 'emotion' by default, so adding the config is only useful if you want to adjust [Twin’s other options](#twin-options).

### Add the next babel config

Create a new file either in the root or in a `config`
subfolder:

```js
// withTwin.mjs
import babelPluginMacros from 'babel-plugin-macros'
import * as path from 'path'
import * as url from 'url'
// import babelPluginTwin from 'babel-plugin-twin'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// The folders containing files importing twin.macro
const includedDirs = [path.resolve(__dirname, 'src')]

/** @returns {import('next').NextConfig} */
export default function withTwin(
  /** @type {import('next').NextConfig} */
  nextConfig,
) {
  return {
    ...nextConfig,
    webpack(
      /** @type {import('webpack').Configuration} */
      config,
      options,
    ) {
      config.module = config.module || {}
      config.module.rules = config.module.rules || []

      config.module.rules.push({
        test: /\.(jsx|js)$/,
        include: includedDirs,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: options.dev,
              presets: [
                [
                  '@babel/preset-react',
                  { runtime: 'automatic', importSource: '@emotion/react' },
                ],
              ],
              plugins: [
                // babelPluginTwin, // Optional
                babelPluginMacros,
              ],
            },
          },
        ],
      })

      if (typeof nextConfig.webpack === 'function')
        return nextConfig.webpack(config, options)

      return config
    },
  }
}
```

Then in your `next.config.mjs`, import and wrap the main export with `withTwin(...)`:

```js
// next.config.mjs
import withTwin from './withTwin.mjs'

/**
 * @type {import('next').NextConfig}
 */
export default withTwin({
  reactStrictMode: true,
})
```

[](#customization)

## Customization

- [View the config options →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/options.md)
- [Customizing the tailwind config →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md)

[](#next-steps)

## Next steps

Learn how to work with twin

- [The prop styling guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/prop-styling-guide.md) - A must-read guide to level up on prop styling
- [The styled component guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/styled-component-guide.md) - A must-read guide on getting productive with styled-components

Learn more about emotion

- [Emotion’s css prop](https://emotion.sh/docs/css-prop)
- [Emotion’s css import](https://emotion.sh/docs/css-prop#string-styles)
- [Emotion’s styled import](https://emotion.sh/docs/styled)
