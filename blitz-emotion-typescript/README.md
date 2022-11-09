<p><img src="https://i.imgur.com/TpGU8St.png" alt="twin, blitz.js, emotion, typescript" width="500"></p>

This example uses [Blitz.js](https://github.com/blitz-js/blitz) to build a [Next.js](https://nextjs.org/) App written in [TypeScript](https://www.typescriptlang.org/) and styled with [Twin](https://github.com/ben-rogerson/twin.macro) + [emotion](https://emotion.sh/).

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/blitz-emotion-typescript app-name
```

From within the new folder, run `npm install`, then `npm run dev` to start the dev server.

[](#table-of-contents)

## Getting started

### Installation

Install [Blitz.js](https://github.com/blitz-js/blitz):

```shell
npx blitz new app-name
```

Install the dependencies

```shell
npm install @emotion/react @emotion/styled @emotion/server
npm install -D twin.macro tailwindcss babel-plugin-macros @emotion/babel-preset-css-prop
```

<details>
  <summary>Install with Yarn</summary>

```shell
yarn add @emotion/react @emotion/styled @emotion/server
yarn add twin.macro tailwindcss babel-plugin-macros @emotion/babel-preset-css-prop -D
```

</details>

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles, some @keyframes for animations, and some global css variables.

Import `GlobalStyles` within a new file placed in `app/styles/GlobalStyles.tsx`:

```typescript
// app/styles/GlobalStyles.tsx
import { Fragment } from 'react'
import { Global } from '@emotion/react'
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <Global styles={customStyles} />
  </Fragment>
)

export default GlobalStyles
```

Then import the GlobalStyles file in `app/pages/_app.tsx`:

```diff
// app/pages/_app.tsx
import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from 'blitz'
+ import { Fragment } from 'react'
+ import GlobalStyles from './../styles/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || (page => page)

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      {getLayout(
+        <Fragment>
+          <GlobalStyles />
          <Component {...pageProps} />
+        </Fragment>,
      )}
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <ErrorComponent
      statusCode={error.statusCode || 400}
      title={error.message || error.name}
    />
  )
}
```

### SSR styles setup

Creating a `_document.js` file like this will put critical styles in the head of the page.
Without this step, you’ll notice a difference between the SSR generated styles and the ones that hydrate on the client side.

```js
// pages/_document.js
import { Fragment } from 'react'
import {
  Document,
  Html,
  DocumentHead,
  Main,
  BlitzScript /*DocumentContext*/,
} from 'blitz'
import { extractCritical } from '@emotion/server'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    const critical = extractCritical(initialProps.html)
    initialProps.html = critical.html
    initialProps.styles = (
      <Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </Fragment>
    )

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
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

### Add the babel config

Add this config to your `babel.config.js`:

```js
// babel.config.js
module.exports = {
  presets: ['blitz/babel', '@emotion/babel-preset-css-prop'],
  plugins: [
    '@emotion/babel-plugin',
    'babel-plugin-twin', // Optional
    'babel-plugin-macros',
  ],
}
```

### Complete the TypeScript setup

To avoid red squiggly underlines, you’ll need to add the remaining types for your chosen css-in-js framework.

First up, you’ll need to install some types for React:

Then create a file in `types/twin.d.ts` and add these declarations:

```typescript
// types/twin.d.ts
import 'twin.macro'
import styledImport from '@emotion/styled'
import { css as cssImport } from '@emotion/react'
import { CSSInterpolation } from '@emotion/serialize'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSInterpolation
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSInterpolation
  }
}
```

Then add the following to your `tsconfig.json`:

```json
// tsconfig.json
{
  "compilerOptions": {
    "jsxImportSource": "@emotion/react"
  },
  "include": ["types"]
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

Learn more about emotion

- [Emotion’s css prop](https://emotion.sh/docs/css-prop)
- [Emotion’s css import](https://emotion.sh/docs/css-prop#string-styles)
- [Emotion’s styled import](https://emotion.sh/docs/styled)
