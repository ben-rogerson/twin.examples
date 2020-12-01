<a href="https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/next-styled-components?file=/src/App.js"><img src="https://i.imgur.com/jFGtYJe.png" alt="twin, next, styled-components" width="550"></a>

**[🔥 Demo this example on CodeSandbox →](https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/next-styled-components?file=/src/App.js)**

## Getting started

### 1. Install the dependencies

After creating your next app:

```bash
npm install --save twin.macro tailwindcss styled-components
```

<details>
  <summary>Yarn instructions</summary>

```bash
yarn add twin.macro tailwindcss styled-components
```

</details>

### 2. Enable babel macros and configure styled-components

```js
// In .babelrc
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    "babel-plugin-macros",
    [
      "styled-components",
      { "ssr": true }
    ]
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

`GlobalStyles` also includes some [@keyframes](https://github.com/ben-rogerson/twin.macro/blob/master/src/config/globalStyles.js) so the `animate-xxx` classes have animations and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) work.

### 4. Add the twin config

Twin’s config can get added in a couple of different places.

**a) In a new file named `babel-plugin-macros.config.js` placed in your project root:**

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'styled-components'
  }
}
```

**b) Or in your `package.json`:**

```js
// package.json
"babelMacros": {
  "twin": {
    "preset": "styled-components",
  }
},
```

### 5. Complete the TypeScript support (TypeScript only)

Twin comes with types for every import except the `css` and `styled` imports.

[Add the remaining types →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/typescript.md)

### 6. Add the server stylesheet (optional)

To avoid the ugly Flash Of Unstyled Content (FOUC), add a server stylesheet in `pages/_document.js` that gets read by Next.js:

```js
// pages/_document.js
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
```

Note: Adding styles within this file won’t work like you would expect, [take a look at this issue for a workaround](https://github.com/ben-rogerson/twin.macro/issues/146#issuecomment-691737363).

## Twin config options

| Name                  | Type      | Default                | Description                                                                                                               |
| --------------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| config                | `string`  | `"tailwind.config.js"` | The path to your Tailwind config                                                                                          |
| preset                | `string`  | `"emotion"`            | The css-in-js library behind the scenes - also supports 'styled-components' and 'goober'                                  |
| hasSuggestions        | `boolean` | `true`                 | Display class suggestions when a class isn't found                                                                        |
| debugPlugins          | `boolean` | `false`                | Display generated class information in your terminal from your plugins                                                    |
| dataTwProp            | `boolean` | `false`                | Add a prop to your elements in development so you can see the original tailwind classes, eg: `<div data-tw="bg-black" />` |
| debug                 | `boolean` | `false`                | Display information in your terminal about the Tailwind class conversions                                                 |
| disableColorVariables | `boolean` | `false`                | Disable css variables in colors (not gradients) to help support IE11/react native                                         |

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

## Next steps

- See how to [customize your classes →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md)
- Learn how to use the styled-components library<br/>
  The [css prop](https://styled-components.com/docs/api#css-prop) / [css import](https://styled-components.com/docs/api#css) / [styled import](https://styled-components.com/docs/api#styled)

## More examples with styled-components

- [React](https://github.com/ben-rogerson/twin.examples/blob/master/react-styled-components)
- [Preact](https://github.com/ben-rogerson/twin.examples/blob/master/preact-styled-components)
- [Create React App](https://github.com/ben-rogerson/twin.examples/blob/master/cra-styled-components)
- [Gatsby](https://github.com/ben-rogerson/twin.examples/blob/master/gatsby-styled-components)
- Next.js (current))
- [Snowpack](https://github.com/ben-rogerson/twin.examples/blob/master/snowpack-react-styled-components)
