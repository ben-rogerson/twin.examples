<a href="https://codesandbox.io/s/github/ben-rogerson/twin.examples/tree/master/react-styled-components?file=/src/App.js"><img src="https://i.imgur.com/Uu6f8GU.png" alt="twin, react, styled-components" width="550"></a>

**[🔥 Demo this example on CodeSandbox →](https://codesandbox.io/s/github/ben-rogerson/twin.examples/tree/master/react-styled-components?file=/src/App.js)**

## Getting started

### 1. Install the dependencies

```bash
# React and Babel
npm install --save react react-dom @babel/core @babel/plugin-transform-react-jsx
# Twin and Styled Components
npm install --save twin.macro styled-components
```

<details>
  <summary>Yarn instructions</summary>

```bash
# React and Babel
yarn add react react-dom @babel/core @babel/plugin-transform-react-jsx
# Twin and Styled Components
yarn add twin.macro styled-components
```

</details>

### 2. Enable babel macros and jsx

```js
// In .babelrc
{
  "plugins": [
    "babel-plugin-macros",
    "@babel/plugin-transform-react-jsx",
  ]
}
```

### 3. Add the global styles

Projects using Twin also use the Tailwind [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) to smooth over cross-browser inconsistencies.

Twin adds the preflight base styles with the `GlobalStyles` import which you can add in `src/App.js`:

```js
// src/App.js
import React from 'react'
import { GlobalStyles } from 'twin.macro'

const App = () => (
  <div>
    <GlobalStyles />
    {/* ... */}
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
    config: 'tailwind.config.js',
    preset: 'styled-components',
    autoCssProp: true,
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
      "config": "tailwind.config.js",
      "preset": "styled-components",
      "autoCssProp": true,
      "debugProp": true,
      "debugPlugins": false,
      "debug": false,
    }
},
```

### 5. Complete the TypeScript support (TypeScript only)

Twin comes with types for every import except the `css` and `styled` imports.

[Add the remaining types →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/typescript.md)

## Options

| Name                  | Type      | Default                | Description                                                                                                                                                                                                              |
| --------------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config                | `string`  | `"tailwind.config.js"` | The path to your Tailwind config                                                                                                                                                                                         |
| preset                | `string`  | `"emotion"`            | The css-in-js library behind the scenes - also supports 'styled-components' and 'goober'                                                                                                                                 |
| autoCssProp           | `boolean` | `false`                | This code automates the import of 'styled-components/macro' so you can use their css prop. Enable it if you're using styled-components with React, CRA or Gatsby. If you're using Emotion, setting to true does nothing. |
| hasSuggestions        | `boolean` | `true`                 | Display class suggestions when a class isn't found                                                                                                                                                                       |
| debugPlugins          | `boolean` | `false`                | Display generated class information in your terminal from your plugins                                                                                                                                                   |
| debugProp             | `boolean` | `false`                | Add a prop to your elements in development so you can see the original tailwind classes, eg: `<div data-tw="bg-black" />`                                                                                                |
| debug                 | `boolean` | `false`                | Display information in your terminal about the Tailwind class conversions                                                                                                                                                |
| disableColorVariables | `boolean` | `false`                | Disable css variables in colors (not gradients) to help support IE11/react native                                                                                                                                        |

## Customized imports

Instead of using `preset: "styled-components"`, you can also customize the `styled`, `css` and `GlobalStyles` imports with the following config:

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    styled: {
      import: 'default',
      from: 'styled-components'
    },
    css: {
      import: 'css',
      from: 'styled-components/macro'
    },
    global: {
      import: 'createGlobalStyle',
      from: 'styled-components'
    }
  }
}
```

<details>
  <summary>package.json instructions</summary>

```js
// package.json
"babelMacros": {
  "twin": {
    "styled": {
      "import": "default",
      "from": "styled-components"
    },
    "css": {
      "import": "css",
      "from": "styled-components/macro"
    },
    "global": {
      "import": "createGlobalStyle",
      "from": "styled-components"
    }
  }
},
```

</details>

**Note:** Make sure you remove the `preset` option as that value disables these custom options.

## Next steps

- See how to [customize your classes →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md)
- Learn how to use the styled-components library<br/>
  The [css prop](https://styled-components.com/docs/api#css-prop) / [css import](https://styled-components.com/docs/api#css) / [styled import](https://styled-components.com/docs/api#styled)

## More examples with Styled Components

- React (current)
- [Preact](https://github.com/ben-rogerson/twin.examples/blob/master/preact-styled-components)
- [Create React App](https://github.com/ben-rogerson/twin.examples/blob/master/cra-styled-components)
- [Gatsby](https://github.com/ben-rogerson/twin.examples/blob/master/gatsby-styled-components)
- [Next.js](https://github.com/ben-rogerson/twin.examples/blob/master/next-styled-components)
- [Snowpack](https://github.com/ben-rogerson/twin.examples/blob/master/snowpack-react-styled-components)
