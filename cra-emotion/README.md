# Twin + Create React App + Emotion

<p><a href="https://github.com/ben-rogerson/twin.macro#gh-light-mode-only" target="_blank"><img src="../.github/twin-light.svg" alt="Twin" width="60" height="70"></a><a href="https://github.com/ben-rogerson/twin.macro#gh-dark-mode-only" target="_blank"><img src="../.github/twin-dark.svg" alt="Twin" width="60" height="70"></a><a href="https://create-react-app.dev/" target="_blank"><img src="../.github/create-react-app.svg" alt="Create React App" width="60" height="70"></a><a href="https://emotion.sh/docs/introduction" target="_blank"><img src="../.github/emotion.svg" alt="Emotion" width="60" height="70"></a>
</p>

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/cra-emotion folder-name
```

From within the new folder, run `npm install`, then `npm start` to start the dev server.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config (optional)](#add-the-twin-config-optional)
  - [Add the jsx pragma](#add-the-jsx-pragma)
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
npm install twin.macro tailwindcss @emotion/react @emotion/styled
```

<details>
  <summary>Install with Yarn</summary>

Install Create React App

```shell
yarn create create-react-app my-app
```

Install the dependencies

```shell
yarn add twin.macro tailwindcss @emotion/react @emotion/styled
```

</details>

### Add the global styles

Twin uses the same preflight base styles as Tailwind to smooth over cross-browser inconsistencies.

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

```json
// package.json
"babelMacros": {
  "twin": {
    "preset": "emotion"
  }
},
```

Note: The preset gets set to 'emotion' by default, so adding the config is only useful if you want to adjust [Twin’s other options](#twin-options).

### Add the jsx pragma

To use the `tw` and `css` props, emotion must first extend jsx with a [jsx pragma](https://emotion.sh/docs/css-prop#jsx-pragma).

When styling with the tw or css prop, add the pragma at the top of your file. This also replaces the react import, unless you’re using fragments `<>`.

```js
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

const Input = () => <input tw="bg-black" />
// or
const Input = () => <input css={tw`bg-black`} />
```

> You can automate the injection of the jsx pragma but you’ll need to use a package like [rewire create react app](https://github.com/timarney/react-app-rewired) to allow changes to the project `.babelrc`. Check the [twin emotion + react docs](https://github.com/ben-rogerson/twin.examples/blob/master/react-emotion/README.md) for the babel config to use.

> Note: After build, if you’re seeing "process is not defined" then npm install and add `"babel-plugin-transform-inline-environment-variables"` to .babelrc

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
