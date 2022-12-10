# Twin + Create React App + Styled Components

<p><a href="https://github.com/ben-rogerson/twin.macro#gh-light-mode-only" target="_blank"><img src="../.github/twin-light.svg" alt="Twin" width="60" height="70"></a><a href="https://github.com/ben-rogerson/twin.macro#gh-dark-mode-only" target="_blank"><img src="../.github/twin-dark.svg" alt="Twin" width="60" height="70"></a><a href="https://create-react-app.dev/" target="_blank"><img src="../.github/create-react-app.svg" alt="Create React App" width="60" height="70"></a><a href="https://styled-components.com#gh-light-mode-only" target="_blank"><img src="../.github/styled-components-light.svg" alt="Styled components" width="105" height="70"></a><a href="https://styled-components.com#gh-dark-mode-only" target="_blank"><img src="../.github/styled-components-dark.svg" alt="Styled components" width="105" height="70"></a>
</p>

**Important**

To use the css or tw props for styling (opposed to strictly style component styling), you’ll need to import styled components in every file. This is the technique this example repo uses:

```js
import 'styled-components/macro'
```

To avoid this import annoyance, you can install [`babel-plugin-styled-components`](https://github.com/styled-components/babel-plugin-styled-components) and add it to your babel config... but there’s a catch.

By default, CRA doesn't allow us to change the babel config but we can install a cra plugin to allow a custom babel config without ejecting:
[craco](https://github.com/gsoft-inc/craco) / [react-app-rewired](https://github.com/timarney/react-app-rewired).
Once that's setup, add `babel-plugin-styled-components` to your babel config.

Note: Make sure it's added after `babel-plugin-macros`:

```js
// .babelrc
{
  // ...
  "plugins": [
    // "babel-plugin-twin", // < If using
    "babel-plugin-macros",
    "babel-plugin-styled-components"
  ]
}
```

---

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/cra-styled-components folder-name
```

From within the new folder, run `npm install`, then `npm start` to start the dev server.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config](#add-the-twin-config)
- [Customization](#customization)
- [Next steps](#next-steps)

[](#getting-started)

## Getting started

### Installation

Install Create React App

```shell
npm init create-react-app my-app
```

Install the dependencies

```shell
npm install twin.macro tailwindcss styled-components
```

<details>
  <summary>Install with Yarn</summary>

Install Create React App

```shell
yarn create create-react-app my-app
```

Install the dependencies

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
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
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
