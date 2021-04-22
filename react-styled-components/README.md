<p><img src="https://i.imgur.com/zxO2ib2.png" alt="twin, react, styled-components" width="500"></p>

Download this example using [degit](https://github.com/Rich-Harris/degit):

```shell
npx degit https://github.com/ben-rogerson/twin.examples/react-styled-components folder-name
```

Or keep scrolling for installation instructions.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config](#add-the-twin-config)
  - [Add the babel config](#add-the-babel-config)
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

React and Babel

```shell
npm install react react-dom @babel/core @babel/plugin-transform-react-jsx
```

Twin and styled-components

```shell
npm install twin.macro tailwindcss styled-components
```

<details>
  <summary>Install with Yarn</summary>

```shell
yarn add react react-dom @babel/core @babel/plugin-transform-react-jsx
```

Twin and styled-components

```shell
yarn add twin.macro tailwindcss styled-components
```

</details>

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

You can import `GlobalStyles` within a new file placed in `src/styles/GlobalStyles.js`:

```js
// src/styles/GlobalStyles.js
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
```

Then import the GlobalStyles file in `src/index.js`:

```js
// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
```

### Add the twin config

Twin’s config can be added in a couple of different files.

a) Either in `babel-plugin-macros.config.js`:

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'styled-components',
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

```js
// .babelrc
// In .babelrc
{
  "plugins": [
    "babel-plugin-macros",
    "@babel/plugin-transform-react-jsx",
  ]
}
```

### Complete the TypeScript setup

If you’re using TypeScript, you’ll need to add the remaining types for your chosen css-in-js framework.

<details>
  <summary>Setup instructions</summary>

First up, you’ll need to install some types for react and styled-components:

```bash
npm install -D @types/react @types/styled-components
// or
yarn add @types/react @types/styled-components -D
```

Then twin needs some type declarations added for your chosen css-in-js library, otherwise you’ll see errors like this:

```shell
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
import styledImport, { CSSProp, css as cssImport } from 'styled-components'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element
    }
  }
}
```

Then add the following in your typescript config:

```typescript
// tsconfig.json
{
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
| preset                | `string`           | `"emotion"`            | The css-in-js library behind the scenes - also supports 'styled-components' and 'goober'                                                                            |
| autoCssProp           | `boolean`          | `true`                 | This code automates the import of 'styled-components/macro' so you can use their css prop                                                                           |
| hasSuggestions        | `boolean`          | `true`                 | Display class suggestions when a class isn't found                                                                                                                  |
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

Learn more about styled-components

- [The css prop](https://styled-components.com/docs/api#css-prop)
- [The css import](https://styled-components.com/docs/api#css)
- [The styled import](https://styled-components.com/docs/api#styled)
