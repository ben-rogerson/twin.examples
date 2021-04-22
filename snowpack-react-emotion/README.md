<p><img src="https://i.imgur.com/sVag6YX.png" alt="twin, snowpack, emotion" width="500"></p>

Download this example using [degit](https://github.com/Rich-Harris/degit):

```shell
npx degit https://github.com/ben-rogerson/twin.examples/snowpack-react-emotion folder-name
```

Or keep scrolling for installation instructions.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config (optional)](#add-the-twin-config-optional)
  - [Add the babel config](#add-the-babel-config)
  - [Add the snowpack config](#add-the-snowpack-config)
  - [Add the startup scripts](#add-the-startup-scripts)
  - [Complete the TypeScript setup](#complete-the-typescript-setup)
- [Customization](#customization)
  - [Twin options](#twin-options)
  - [Tailwind config](#tailwind-config)
  - [Plugins](#plugins)
    - [External](#external)
    - [Custom classes](#custom-classes)
- [Next steps](#next-steps)

[](#getting-started)

## Getting started

### Installation

Install Snowpack

```shell
npm install --save-dev snowpack @snowpack/app-scripts-react
```

Install the dependencies

```shell
npm install react react-dom @emotion/react @emotion/styled @emotion/babel-plugin-jsx-pragmatic twin.macro tailwindcss
```

<details>
  <summary>Install with Yarn</summary>

Install Snowpack

```shell
yarn add snowpack @snowpack/app-scripts-react --dev
```

Install the dependencies

```shell
yarn add react react-dom @emotion/react @emotion/styled @emotion/babel-plugin-jsx-pragmatic twin.macro tailwindcss
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

The newest pragma sits at the top of your files and looks like this:

```js
/** @jsxImportSource @emotion/react */
```

But you can avoid adding that pragma yourself with the following babel config:

```js
// babel.config.json
{
  "extends": "@snowpack/app-scripts-react/babel.config.json",
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

<details>
  <summary>Option #2: Manually specify the jsx pragma in each file</summary>

If you’d rather add the pragma yourself, first add this babel config:

```js
// babel.config.json
{
  "plugins": [
    "extends": "@snowpack/app-scripts-react/babel.config.json",
    "babel-plugin-macros",
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

Then when styling with the tw or css prop, add the pragma at the top of your file. This also replaces the react import:

```js
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

const Input = () => <input tw="bg-black" />
// or
const Input = () => <input css={tw`bg-black`} />
```

</details>

> Note: After build, if you’re seeing "process is not defined" then npm install and add `"babel-plugin-transform-inline-environment-variables"` to .babelrc

### Add the snowpack config

Add the following to your snowpack config:

```js
// snowpack.config.js
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: '@snowpack/app-scripts-react',
  packageOptions: {
    knownEntrypoints: ['@emotion/react', '@emotion/styled'],
  },
}
```

### Add the startup scripts

In `package.json`, add these scripts:

```js
// package.json
"scripts": {
  "start": "snowpack dev",
  "build": "snowpack build"
},
```

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

### Twin options

| Name                  | Type               | Default                | Description                                                                                                                                                         |
| --------------------- | ------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config                | `string`           | `"tailwind.config.js"` | The path to your Tailwind config                                                                                                                                    |
| preset                | `string`           | `"emotion"`            | The css-in-js library behind the scenes - also supports 'styled-components' and 'goober'.                                                                           |
| hasSuggestions        | `boolean`          | `true`                 | Display suggestions when a class isn’t found                                                                                                                        |
| dataTwProp            | `boolean`/`string` | `true`                 | Add a prop to your elements in development so you can see the original tailwind classes, eg: `<div data-tw="bg-black" />`, add `all` to keep the prop in production |
| debugPlugins          | `boolean`          | `false`                | Display generated class information in your terminal from your plugins                                                                                              |
| debug                 | `boolean`          | `false`                | Display information in your terminal about the Tailwind class conversions                                                                                           |
| disableColorVariables | `boolean`          | `false`                | Disable css variables in colors (not gradients) to help support IE11/react native                                                                                   |
| includeClassNames     | `boolean`          | `false`                | Look in className props for tailwind classes to convert                                                                                                             |
| dataCsProp            | `boolean`          | `true`                 | Add a prop to your elements in development so you can see the original cs prop classes, eg: `<div data-cs="maxWidth[1em]" />`                                       |
| disableCsProp         | `boolean`          | `false`                | Disable twin from reading values specified in the cs prop.                                                                                                          |

### Tailwind config

For style customizations, add a `tailwind.config.js` in your project root.

> It’s important to know that you don’t need a `tailwind.config.js` to use Twin. You already have access to every class with every variant.
> Unlike Tailwind, twin.macro only generates styles for the classes so you don’t need to use [PurgeCSS](https://purgecss.com/).

Choose from one of the following configs:

- a) Start with an empty config:

  ```js
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        colors: {},
      },
    },
    plugins: [],
  }
  ```

- b) Start with a [full config](https://raw.githubusercontent.com/tailwindcss/tailwindcss/master/stubs/defaultConfig.stub.js):

  ```shell
  # cd into your project folder then:
  npx tailwindcss-cli@latest init --full
  ```

  In the config, twin only reads the `darkMode`, `theme` and `plugins` entries, so feel free to remove the rest.

### Plugins

#### External

You can use many Tailwind plugins with twin, like [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography) and [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) but there’s no compatibility with plugins that use the `addVariant` functions.

[See list of supported plugins →](https://twin-docs.netlify.app/plugin-support)

#### Custom classes

You can add your own custom css within a plugin. Here’s an example of a custom class that adds breakpoint based paddings from theme values:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [paddings],
}

function paddings({ addComponents, theme }) {
  addComponents({
    '.my-padding': {
      '@screen md': {
        'padding-left': theme`padding.3`,
        'padding-right': theme`padding.3`,
      },
      '@screen lg': {
        'padding-left': theme`padding.6`,
        'padding-right': theme`padding.6`,
      },
    },
  })
}
```

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

- [React](https://github.com/ben-rogerson/twin.examples/tree/master/react-emotion)
- [Preact](https://github.com/ben-rogerson/twin.examples/tree/master/preact-emotion)
- [Create React App](https://github.com/ben-rogerson/twin.examples/tree/master/cra-emotion)
- [Gatsby](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-emotion)
- [Next.js](https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion)
- Snowpack (current)
