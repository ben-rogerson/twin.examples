<a href="https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/next-emotion?file=/src/App.js"><img src="https://i.imgur.com/zqspwBF.png" alt="twin, next, emotion" width="550"></a>

**[🔥 Demo this example on CodeSandbox →](https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/next-emotion?file=/src/App.js)**

## Getting started

### 1. Install the dependencies

After creating your next app:

```bash
npm install --save twin.macro @emotion/react @emotion/styled @emotion/babel-preset-css-prop
```

<details>
  <summary>Yarn instructions</summary>

```bash
yarn add twin.macro @emotion/react @emotion/styled @emotion/babel-preset-css-prop
```

</details>

### 2. Enable babel macros and the css prop

Add this to `.babelrc` in your project root:

```js
// .babelrc
{
  "presets": [
    "next/babel",
    "@emotion/babel-preset-css-prop"
  ],
  "plugins": [
    "babel-plugin-macros"
  ]
}
```

### 3. Add the global styles

Projects using Twin also use the Tailwind [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) to smooth over cross-browser inconsistencies.

Twin adds the preflight base styles with the `GlobalStyles` import which you can add in `pages/_app.js`:

```js
// page/_app.js
import { GlobalStyles } from 'twin.macro'

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
```

`GlobalStyles` also includes some [@keyframes](https://github.com/ben-rogerson/twin.macro/blob/master/src/config/globalStyles.js) so the `animate-xxx` classes have animations. But if you’re not using the animate classes then you can [avoid adding the extra keyframes](https://github.com/ben-rogerson/twin.macro/blob/master/docs/extra-keyframes.md).

### 4. Add the recommended config

Twin’s recommended config can get added in a couple of different places.

**a) In a new file named `babel-plugin-macros.config.js` placed in your project root:**

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    styled: {
      import: 'default',
      from: '@emotion/styled'
    },
    css: {
      import: 'css',
      from: '@emotion/react'
    },
    global: {
      import: 'Global',
      from: '@emotion/react'
    },
    config: 'tailwind.config.js',
    debugProp: true,
    debugPlugins: false,
    debug: false
  }
}
```

**b) Or in your `package.json`:**

```js
// package.json
"babelMacros": {
  "twin": {
    "styled": {
      "import": "default",
      "from": "@emotion/styled"
    },
    "css": {
      "import": "css",
      "from": "@emotion/react"
    },
    "global": {
      "import": "Global",
      "from": "@emotion/react"
    },
    "config": "tailwind.config.js",
    "debugProp": true,
    "debugPlugins": false,
    "debug": false
  }
},
```

### 5. Complete the TypeScript support (TypeScript only)

Twin comes with types for every import except the `css` and `styled` imports.

[Add the remaining types →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/typescript.md)

## Options

| Name                  | Type      | Default                | Description                                                                                                                                                                                                                           |
| --------------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config                | `string`  | `"tailwind.config.js"` | The path to your Tailwind config                                                                                                                                                                                                      |
| preset                | `string`  | `"emotion"`            | The css-in-js library behind the scenes - also supports 'styled-components' and 'goober'. Emotion v11+ users shouldn’t use this option [until an updated preset is available](https://github.com/ben-rogerson/twin.macro/issues/184). |
| hasSuggestions        | `boolean` | `true`                 | Display class suggestions when a class isn't found                                                                                                                                                                                    |
| debugPlugins          | `boolean` | `false`                | Display generated class information in your terminal from your plugins                                                                                                                                                                |
| debugProp             | `boolean` | `false`                | Add a prop to your elements in development so you can see the original tailwind classes, eg: `<div data-tw="bg-black" />`                                                                                                             |
| debug                 | `boolean` | `false`                | Display information in your terminal about the Tailwind class conversions                                                                                                                                                             |
| disableColorVariables | `boolean` | `false`                | Disable css variables in colors (not gradients) to help support IE11/react native                                                                                                                                                     |

## Next steps

- See how to [customize your classes →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md)
- Learn how to use the emotion library<br/>
  The [css prop](https://emotion.sh/docs/css-prop) / [css import](https://emotion.sh/docs/css-prop#string-styles) / [styled import](https://emotion.sh/docs/styled)

## More examples with Emotion

- [React](https://github.com/ben-rogerson/twin.examples/blob/master/react-emotion/README.md)
- [Create React App](https://github.com/ben-rogerson/twin.examples/blob/master/cra-emotion/README.md)
- [Gatsby](https://github.com/ben-rogerson/twin.examples/blob/master/gatsby-emotion/README.md)
- Next.js (current)
- [Snowpack](https://github.com/ben-rogerson/twin.examples/blob/master/snowpack-react-emotion/README.md)
- [Vue (experimental)](https://github.com/ben-rogerson/twin.examples/blob/master/vue-emotion/README.md)
