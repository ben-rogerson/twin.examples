<p><img src="https://i.imgur.com/YyG9s4u.png" alt="twin, react, emotion" width="500"></p>

Download this example using [degit](https://github.com/Rich-Harris/degit):

```shell
npx degit https://github.com/ben-rogerson/twin.examples/react-emotion folder-name
```

Or keep scrolling for installation instructions.

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

React and Babel

```shell
npm install react react-dom @babel/core @emotion/babel-plugin-jsx-pragmatic babel-plugin-macros
```

Twin and Emotion

```shell
npm install twin.macro @emotion/react @emotion/styled
```

<details>
  <summary>Install with Yarn</summary>

React and Babel

```shell
yarn add react react-dom @babel/core @emotion/babel-plugin-jsx-pragmatic babel-plugin-macros
```

Twin and Emotion

```shell
yarn add twin.macro @emotion/react @emotion/styled
```

</details>

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

You can add Twin’s `GlobalStyles` import in `src/index.js`:

```js
// src/index.js
import React from 'react'
import { render } from 'react-dom'
import { GlobalStyles } from 'twin.macro'
import App from './App'

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root'),
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

```js
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
        "pragma": "__cssprop",
        "pragmaFrag": "React.Fragment"
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

If you’re using TypeScript, you’ll need to add the remaining types for your chosen css-in-js framework.

<details>
  <summary>Setup instructions</summary>

First up, you’ll need to install some types for React:

```bash
npm install -D @types/react
// or
yarn add @types/react -D
```

Then twin needs some type declarations added for your chosen css-in-js library, otherwise you’ll see errors like this:

```js
Module '"../node_modules/twin.macro/types"' has no exported member 'styled'.
// or
Module '"../node_modules/twin.macro/types"' has no exported member 'css'.
// or
Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
```

To fix this, create a `twin.d.ts` file in your project root (`src/twin.d.ts` with create-react-app) and add these declarations:

```typescript
// twin.d.ts
import 'twin.macro'
import styledImport from '@emotion/styled'
import { css as cssImport } from '@emotion/react'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}
```

Then add the following to your typescript config:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "jsxImportSource": "@emotion/react" // for the css prop
  },
  "files": ["twin.d.ts"],
  // or "include": ["twin.d.ts"],
}
```

Now that you’ve added the definitions, you can use these imports:

```typescript
import tw, { css, styled, theme } from 'twin.macro'
```

And these props:

```typescript
<div tw="">
<div css={}>
```

</details>

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

View more emotion examples

- React (current)
- [Create React App](https://github.com/ben-rogerson/twin.examples/tree/master/cra-emotion)
- [Gatsby](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-emotion)
- [Next.js](https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion)
- [Snowpack](https://github.com/ben-rogerson/twin.examples/tree/master/snowpack-react-emotion)
