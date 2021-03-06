<p><img src="https://i.imgur.com/5MSVZiv.png" alt="twin, vite, styled-components" width="500"></p>

Download this example using [degit](https://github.com/Rich-Harris/degit):

```shell
npx degit https://github.com/ben-rogerson/twin.examples/vite-styled-components-typescript folder-name
```

Or keep scrolling for installation instructions.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config](#add-the-twin-config)
  - [Add the vite config](#add-the-vite-config)
  - [Add TypeScript types](#add-typescript-types)
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

Install Vite

```shell
npm init @vitejs/app my-vue-app -- --template react-ts
```

Install the dependencies

```shell
npm install styled-components
npm install --save-dev twin.macro vite-plugin-babel-macros tailwindcss
```

<details>
  <summary>Install with Yarn</summary>

Install Vite

```shell
yarn create @vitejs/app my-vue-app --template react-ts
```

Install the dependencies

```shell
yarn add styled-components
yarn add twin.macro vite-plugin-babel-macros tailwindcss -D
```

</details>

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

You can import `GlobalStyles` within a new file placed in `src/styles/GlobalStyles.tsx`:

```js
// src/styles/GlobalStyles.tsx
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`font-sans text-base antialiased`}
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

Then import the GlobalStyles file in `src/main.tsx`:

```js
// src/main.tsx
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

### Add the vite config

Add the following to your vite config:

```js
// vite.config.json
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), macrosPlugin()],
  define: {
    'process.platform': JSON.stringify('win32'),
    'process.env': {},
  },
})
```

### Add TypeScript types

Install the types for styled-components:

```bash
npm install --save-dev @types/styled-components
```

or yarn:

```bash
yarn add @types/styled-components -D
```

Create a `types/twin.d.ts` file and add these declarations:

```typescript
// types/twin.d.ts
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
  "include": ["types"]
}
```

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

Learn more about styled-components

- [The css prop](https://styled-components.com/docs/api#css-prop)
- [The css import](https://styled-components.com/docs/api#css)
- [The styled import](https://styled-components.com/docs/api#styled)

View more styled-components examples

- [React](https://github.com/ben-rogerson/twin.examples/tree/master/react-styled-components)
- [Preact](https://github.com/ben-rogerson/twin.examples/tree/master/preact-styled-components)
- [Create React App](https://github.com/ben-rogerson/twin.examples/tree/master/cra-styled-components)
- [Gatsby](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-styled-components)
- [Next.js](https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components)
- [Snowpack](https://github.com/ben-rogerson/twin.examples/tree/master/snowpack-react-styled-components)
- Vite (ts) (current)
