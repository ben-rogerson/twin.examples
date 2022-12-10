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

```shell
npx create-next-app
```

Install the dependencies

```shell
npm install @emotion/react @emotion/styled @emotion/css @emotion/server
npm install -D twin.macro tailwindcss @emotion/babel-plugin babel-plugin-macros @babel/preset-react babel-loader babel-plugin-macros
```

<details>
  <summary>Install with Yarn</summary>

```shell
yarn create next-app
```

Install the dependencies

```shell
yarn add @emotion/react @emotion/styled @emotion/css @emotion/server
yarn add -D twin.macro tailwindcss @emotion/babel-plugin babel-plugin-macros
```

</details>

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles, some @keyframes for animations, and some global css variables.

You can import `GlobalStyles` within a new file placed in `styles/GlobalStyles.js`:

```js
// styles/GlobalStyles.js
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

Then import the GlobalStyles file in `pages/_app.js`:

```js
// pages/_app.js
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from './../styles/GlobalStyles'

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
```

### SSR styles setup

Creating a `_document.js` file like this will put critical styles in the head of the page.
Without this step, you’ll notice a difference between the SSR generated styles and the ones that hydrate on the client side.

```js
// pages/_document.js
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractCritical } from '@emotion/server'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const critical = extractCritical(initialProps.html)
    initialProps.html = critical.html
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </React.Fragment>
    )

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
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
// withTwin.js
const path = require('path')

// The folders containing files importing twin.macro
const includedDirs = [
  path.resolve(__dirname, 'components'),
  path.resolve(__dirname, 'pages'),
  path.resolve(__dirname, 'styles'),
]

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev, isServer } = options
      config.module = config.module || {}
      config.module.rules = config.module.rules || []
      config.module.rules.push({
        test: /\.js$/,
        include: includedDirs,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              presets: [
                [
                  '@babel/preset-react',
                  { runtime: 'automatic', importSource: '@emotion/react' },
                ],
              ],
              plugins: [
                require.resolve('babel-plugin-macros'),
                require.resolve('@emotion/babel-plugin'),
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
```

Then in your `next.config.js`, import and wrap the main export with `withTwin(...)`:

```js
// next.config.js
const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  reactStrictMode: true, // < Recommended by Next
  // ...
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
