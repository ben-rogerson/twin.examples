<p><img src="https://i.imgur.com/jFGtYJe.png" alt="twin, next, styled-components" width="500"></p>

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/next-styled-components-typescript folder-name
```

From within the new folder, run `npm install`, then `npm run dev` to start the dev server.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config](#add-the-twin-config)
  - [Add the babel config](#add-the-babel-config)
  - [Add the server stylesheet](#add-the-server-stylesheet)
- [Customization](#customization)
- [Next steps](#next-steps)

[](#getting-started)

## Getting started

### Installation

Install Next.js

```shell
npx create-next-app --ts
```

Install the dependencies

```shell
npm install styled-components
npm install -D twin.macro tailwindcss babel-plugin-macros @types/styled-components
```

<details>
  <summary>Install with Yarn</summary>

```shell
yarn create next-app --typescript
```

Install the dependencies

```shell
yarn add styled-components
yarn add twin.macro tailwindcss babel-plugin-macros @types/styled-components --dev
```

</details>

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

> Due to an issue in styled-components, global styles get added in the wrong order when using styled-components. This gives the tailwind base styles an incorrect specificity.  
> Until [the issue](https://github.com/styled-components/styled-components/issues/3146) is fixed, the workaround is to export the styles from another file.

You can import `GlobalStyles` within a new file placed in `styles/GlobalStyles.tsx`:

```js
// styles/GlobalStyles.tsx
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
```

Then import the GlobalStyles file in `pages/_app.tsx`:

```js
// pages/_app.tsx
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

### Add the twin config

Twin’s config can be added in a couple of different files.

a) Either in `babel-plugin-macros.config.js`:

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'styled-components',
    autoCssProp: false,
  },
}
```

b) Or in `package.json`:

```js
// package.json
"babelMacros": {
  "twin": {
    "preset": "styled-components"
  }
},
```

### Add the babel config

Add this babel configuration in `.babelrc.js`:

```js
// In .babelrc.js
module.exports = {
  presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
  plugins: [
    'babel-plugin-macros',
    ['babel-plugin-styled-components', { ssr: true }],
  ],
}
```

### Add the server stylesheet

To avoid the ugly Flash Of Unstyled Content (FOUC), add a server stylesheet in `pages/_document.tsx` that gets read by Next.js:

```js
// pages/_document.tsx
import React from 'react'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }
}
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

Learn more about styled-components

- [The css prop](https://styled-components.com/docs/api#css-prop)
- [The css import](https://styled-components.com/docs/api#css)
- [The styled import](https://styled-components.com/docs/api#styled)
