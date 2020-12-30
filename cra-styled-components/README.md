<a href="https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/cra-styled-components?file=/src/App.js"><img src="https://i.imgur.com/rgCyAUm.png" alt="twin, cra, styled-components" width="550"></a>

**[🔥 Demo this example on CodeSandbox →](https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/cra-styled-components?file=/src/App.js)**

## Getting started

### 1. Install Create React App

```bash
npx create-react-app my-app
```

### 2. Install the dependencies

```bash
npm install --save twin.macro tailwindcss styled-components
```

<details>
  <summary>Yarn instructions</summary>

```bash
yarn add twin.macro tailwindcss styled-components
```

</details>

### 3. Add the global styles

Projects using Twin also use the Tailwind [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) to smooth over cross-browser inconsistencies.

Twin adds the preflight base styles with the `GlobalStyles` import which you can add in `src/App.js`:

```js
// src/App.js
import { GlobalStyles } from 'twin.macro'

const App = () => (
  <div>
    <GlobalStyles />
    {/* ... */}
  </div>
)

export default App
```

`GlobalStyles` also includes some [@keyframes](https://github.com/ben-rogerson/twin.macro/blob/master/src/config/globalStyles.js) so the `animate-xxx` classes have animations and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) work.

### 4. Add the twin config

Twin’s config can get added in a couple of different places.

**a) In a new file named `babel-plugin-macros.config.js` placed in your project root:**

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'styled-components',
    styled: {
      import: 'default',
      from: 'styled-components'
    },
    css: {
      import: 'css',
      from: 'styled-components'
    }
  }
}
```

**b) Or in your `package.json`:**

```js
// package.json
"babelMacros": {
  "twin": {
    "preset": "styled-components",
    "styled": {
      "import": "default",
      "from": "styled-components"
    },
    "css": {
      "import": "css",
      "from": "styled-components"
    },
  }
},
```

### 5. Complete the TypeScript support (TypeScript only)

Twin comes with types for every import except the `css` and `styled` imports.

[Add the remaining types →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/typescript.md)

## Twin config options

| Name                  | Type      | Default                | Description                                                                                                                                                                                                              |
| --------------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| config                | `string`  | `"tailwind.config.js"` | The path to your Tailwind config                                                                                                                                                                                         |
| preset                | `string`  | `"emotion"`            | The css-in-js library behind the scenes - also supports 'styled-components' and 'goober'                                                                                                                                 |
| autoCssProp           | `boolean` | `true`                 | This code automates the import of 'styled-components/macro' so you can use their css prop. Enable it if you're using styled-components with React, CRA or Gatsby. If you're using Emotion, setting to true does nothing. |
| hasSuggestions        | `boolean` | `true`                 | Display class suggestions when a class isn't found                                                                                                                                                                       |
| dataTwProp            | `boolean` | `true`                 | Add a prop to your elements in development so you can see the original tailwind classes, eg: `<div data-tw="bg-black" />`                                                                                                |
| debugPlugins          | `boolean` | `false`                | Display generated class information in your terminal from your plugins                                                                                                                                                   |
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
      from: 'styled-components/macro'
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
      "from": "styled-components/macro"
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

## Next steps

- See how to [customize your classes →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md)
- Learn how to use the styled-components library<br/>
  The [css prop](https://styled-components.com/docs/api#css-prop) / [css import](https://styled-components.com/docs/api#css) / [styled import](https://styled-components.com/docs/api#styled)

## More examples with styled-components

- [React](https://github.com/ben-rogerson/twin.examples/blob/master/react-styled-components)
- [Preact](https://github.com/ben-rogerson/twin.examples/blob/master/preact-styled-components)
- Create React App (current)
- [Gatsby](https://github.com/ben-rogerson/twin.examples/blob/master/gatsby-styled-components)
- [Next.js](https://github.com/ben-rogerson/twin.examples/blob/master/next-styled-components)
- [Snowpack](https://github.com/ben-rogerson/twin.examples/blob/master/snowpack-react-styled-components)
