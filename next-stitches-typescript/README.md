<p><img src="https://i.imgur.com/AJzYKmM.png" alt="twin, next, stitches" width="500"></p>

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/next-stitches-typescript folder-name
```

From within the new folder, run `npm install`, then `npm start` to start the dev server.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config](#add-the-twin-config)
  - [Add the babel config](#add-the-babel-config)
  - [Add the stitches config](#add-the-stitches-config)
  - [Add the server stylesheet](#add-the-server-stylesheet)
  - [Complete the TypeScript setup](#complete-the-typescript-setup)
- [Usage](#usage)
  - [Styled components](#styled-components)
  - [Prop styling](#prop-styling)
- [Customization](#customization)
- [Next steps](#next-steps)

[](#getting-started)

## Getting started

### Installation

Install Next.js

```shell
npx create-next-app --typescript
```

Install the dependencies

```shell
npm install @stitches/react
npm install -D twin.macro tailwindcss babel-plugin-macros
```

<details>
  <summary>Install with Yarn</summary>

```shell
yarn create next-app --typescript
```

Install the dependencies

```shell
yarn add @stitches/react
yarn add twin.macro tailwindcss babel-plugin-macros --dev
```

</details>

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

You can add Twin’s `globalStyles` import in `styles/globalStyles.tsx`:

```ts
// styles/globalStyles.tsx
import tw, { theme, globalStyles } from 'twin.macro'
import { globalCss } from '../stitches.config'

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}

const styles = () => {
  globalCss(customStyles)()
  globalCss(globalStyles as Record<any, any>)()
}

export default styles
```

Then import the global styles in `pages/_app.tsx`:

```ts
// pages/_app.tsx
import { AppProps } from 'next/app'
import globalStyles from '../styles/globalStyles'

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  return <Component {...pageProps} />
}

export default App
```

### Add the twin config

Twin’s config can be added in a couple of different files.

a) Either in `babel-plugin-macros.config.js`:

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'stitches',
  },
}
```

b) Or in `package.json`:

```js
// package.json
"babelMacros": {
  "twin": {
    "preset": "stitches"
  }
},
```

### Add the babel config

Add this babel configuration in `.babelrc.js`:

```js
// In .babelrc.js
module.exports = {
  presets: ['next/babel'],
  plugins: ['babel-plugin-macros'],
}
```

### Add the stitches config

Add this stitches configuration in `stitches.config.ts`:

```ts
// stitches.config.ts
import { createStitches, CSS as StitchesCSS } from '@stitches/react'
export type { CSS } from '@stitches/react/types/css-util'

export const stitches = createStitches({
  prefix: '',
  theme: {},
  utils: {},
})

export const { css, styled, globalCss, theme, keyframes, getCssText } = stitches
```

### Add the server stylesheet

To avoid the ugly Flash Of Unstyled Content (FOUC), add a server stylesheet in `pages/_document.tsx` that gets read by Next.js:

```js
// pages/_document.tsx
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* Stitches CSS for SSR */}
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: getCssText() }}
            />
          </>
        ),
      }
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

### Complete the TypeScript setup

Because twin routes the `styled` and `css`, you’ll need complete the typescript setup.

Create a `types/twin.d.ts` file in your project root and add these declarations:

```typescript
// types/twin.d.ts
import 'twin.macro'
import { css as cssImport } from '@stitches/react'
import styledImport from '@stitches/react'

// Support a css prop when used with twins styled.div({}) syntax
type CSSProp<T = AnyIfEmpty<DefaultTheme>> = string | CSSObject

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
    tw?: string
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp
    tw?: string
  }
}

// Support twins styled.div({}) syntax
type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    JSX.IntrinsicElements[Tag]
  >
}

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof StyledTags | typeof styledImport
  const css: typeof cssImport
}
```

Then add the following in your typescript config:

```typescript
// tsconfig.json
{
  // Tell typescript about the types folder
  "types": ["types"],
  // Recommended settings
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"],
}
```

[](#usage)

## Usage

### Styled components

Use the tw import to create and style new components:

```ts
import tw from 'twin.macro'

const Input = tw.input`border hover:border-black`

;<Input />
```

Switch to the styled import to add conditional styling:

```ts
import tw, { styled } from 'twin.macro'

const StyledInput = styled.input({
  // Spread the base styles
  ...tw`bg-white max-w-[200px]`,
  // Add conditional styling in the variants object
  // https://stitches.dev/docs/variants
  variants: {
    hasBorder: { true: tw`border-purple-500` },
  },
})

;<StyledInput hasBorder />
```

### Prop styling

Style jsx elements using the tw prop:

```ts
import 'twin.macro'

const Input = () => <input tw="border hover:border-black" />
```

Nest Twin’s `tw` import within a css prop to add conditional styles:

```ts
import tw from 'twin.macro'

const Input = ({ hasHover }) => (
  <input
    css={{
      // Spread the base styles
      ...tw`border`,
      // Add conditionals afterwards
      ...(hasHover && tw`hover:border-black`),
    }}
  />
)
```

Or mix sass styles with the css import:

```ts
import tw, { css } from 'twin.macro'

const hoverStyles = {
  '&:hover': {
    'border-color': 'black',
    ...tw`text-black`,
  },
}

const Input = ({ hasHover }) => (
  <input css={{ ...tw`border`, ...(hasHover && hoverStyles) }} />
)
```

[](#customization)

## Customization

- [View the config options →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/options.md)
- [Customizing the tailwind config →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md)

[](#next-steps)

## Next steps

For more usage docs, visit the [Stitches docs](https://stitches.dev/docs/introduction)
