# Twin + Parcel + Emotion + TypeScript

<p><a href="https://github.com/ben-rogerson/twin.macro#gh-light-mode-only" target="_blank"><img src="../.github/twin-light.svg" alt="Twin" width="60" height="70"></a><a href="https://github.com/ben-rogerson/twin.macro#gh-dark-mode-only" target="_blank"><img src="../.github/twin-dark.svg" alt="Twin" width="60" height="70"></a><a href="https://parceljs.org/" target="_blank"><img src="../.github/parcel.svg" alt="Parcel" width="60" height="70"></a><a href="https://emotion.sh/docs/introduction" target="_blank"><img src="../.github/emotion.svg" alt="Emotion" width="60" height="70"></a><a href="https://www.typescriptlang.org/" target="_blank"><img src="../.github/typescript.svg" alt="TypeScript" width="60" height="70"></a>
</p>

This example uses [Parcel](https://github.com/parcel-bundler/parcel) to build a [React](https://reactjs.org/) App written in [TypeScript](https://www.typescriptlang.org/) and styled with [Twin](https://github.com/ben-rogerson/twin.macro) + [emotion](https://emotion.sh/).

- To add the css prop, we pass a pragma export from [@emotion/babel-plugin-jsx-pragmatic](https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin-jsx-pragmatic) into jsx via [@babel/plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) - This avoids having to add a [JSX Pragma](https://emotion.sh/docs/css-prop) at the top of each file. The alternative is to use [@emotion/babel-preset-css-prop](https://emotion.sh/docs/@emotion/babel-preset-css-prop) but that has [issues in Parcel@v1](https://github.com/parcel-bundler/parcel/issues/2237) and will be fixed in Parcel@v2.
- Included is the twin companion plugin, [babel-plugin-twin](https://github.com/ben-rogerson/babel-plugin-twin) which enables the tw prop without having to import twin (optional).

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/react-emotion-typescript folder-name
```

From within the new folder, run `npm install`, then `npm start` to start the dev server.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Install the dependencies](#install-the-dependencies)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config (optional)](#add-the-twin-config-optional)
  - [Add the babel config](#add-the-babel-config)
  - [Complete the TypeScript setup](#complete-the-typescript-setup)
- [Customization](#customization)
- [Next steps](#next-steps)

[](#getting-started)

## Getting started

### Install the dependencies

```shell
npm install @emotion/react @emotion/styled react react-dom
npm install -D @babel/core @emotion/babel-plugin-jsx-pragmatic babel-plugin-macros parcel-bundler tailwindcss twin.macro typescript babel-plugin-twin
```

<details>
  <summary>Install with Yarn</summary>

```shell
yarn add @emotion/react @emotion/styled react react-dom
yarn add @babel/core @emotion/babel-plugin-jsx-pragmatic babel-plugin-macros parcel-bundler tailwindcss twin.macro typescript babel-plugin-twin -D
```

</details>

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

You can import `GlobalStyles` within a new file placed in `src/styles/GlobalStyles.tsx`:

```typescript
// src/styles/GlobalStyles.tsx
import React from 'react'
import { Global } from '@emotion/react'
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
```

Then import the GlobalStyles file in `src/index.tsx`:

```typescript
// src/index.tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
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

To use the `tw` and `css` props, emotion must first extend jsx with a [jsx pragma](https://emotion.sh/docs/css-prop#jsx-pragma).

The newest version looks like this and sits at the top of your files:

```js
/** @jsxImportSource @emotion/react */
```

**a) Auto inject the pragma:**

You can avoid adding the pragma yourself with the following babel config:

```js
// .babelrc
{
  "plugins": [
    "babel-plugin-twin",
    "babel-plugin-macros",
    [
      "@emotion/babel-plugin-jsx-pragmatic",
      {
        "export": "jsx",
        "import": "__cssprop",
        "module": "@emotion/react"
      }
    ],
    [
      "@babel/plugin-transform-react-jsx",
      {
        "pragma": "__cssprop"
      }
    ]
  ]
}
```

**b) Or manually specify the jsx pragma in each file:**

First add these babel plugins:

```js
// .babelrc
{
  "plugins": [
    "babel-plugin-twin",
    "babel-plugin-macros",
    ["@babel/plugin-transform-react-jsx", { "runtime": "automatic" }]
  ]
}
```

Then when styling with the tw or css prop, add the pragma at the top of your file. This also replaces the react import:

```js
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

const Input = () => <input tw="bg-black" />
// or
const Input = () => <input css={tw`bg-black`} />
```

> Note: After build, if you’re seeing "process is not defined" then npm install and add `"babel-plugin-transform-inline-environment-variables"` to .babelrc

### Complete the TypeScript setup

To avoid red squiggly underlines, you’ll need to add the remaining types for your chosen css-in-js framework.

First up, you’ll need to install some types for React:

```bash
npm install -D @types/react
// or
yarn add @types/react -D
```

Then create a file in `types/twin.d.ts` and add these declarations:

```typescript
// types/twin.d.ts
import 'twin.macro'
import { css as cssImport } from '@emotion/react'
import styledImport from '@emotion/styled'
import { CSSInterpolation } from '@emotion/serialize'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  // The tw and css prop
  interface DOMAttributes<T> {
    tw?: string
    css?: CSSInterpolation
  }
}
```

Then add the following to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsxImportSource": "@emotion/react"
  },
  "include": ["types"]
}
```

The types are now added for these imports:

```typescript
import tw, { css, styled } from 'twin.macro'
```

And these props:

```typescript
<div tw="">
<div css={}>
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
