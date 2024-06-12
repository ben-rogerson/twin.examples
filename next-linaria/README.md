<a href="https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/next-styled-components?file=/src/App.js"><img src="https://i.imgur.com/jFGtYJe.png" alt="twin, next, styled-components" width="500"></a>

**[🔥 Demo this example on CodeSandbox →](https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/next-styled-components?file=/src/App.js)**

Or download this example using [degit](https://github.com/Rich-Harris/degit):

```shell
npx degit https://github.com/ben-rogerson/twin.examples/next-styled-components folder-name
```


[![-----------------------------------------------------](https://i.imgur.com/aLqZmjt.png)](#table-of-contents)

## Table of Contents

* [Getting Started](#getting-started)
	* [Installation](#installation)
	* [Add the global styles](#add-the-global-styles)
	* [Add the twin config](#add-the-twin-config)
	* [Add the babel config](#add-the-babel-config)
	* [Add the next config](#add-the-next-config)
	* [Add the server stylesheet](#add-the-server-stylesheet)
	* [Complete the TypeScript setup](#complete-the-typescript-setup)
* [Customization](#customization)
	* [Twin Options](#twin-options)
	* [Tailwind Config](#tailwind-config)
	* [Plugins](#plugins)
		* [External](#external)
		* [Custom classes](#custom-classes)
* [Usage](#usage)
	* [Styled Props](#styled-props)
	* [Styled Components](#styled-components)
* [Next Steps](#next-steps)


[![-----------------------------------------------------](https://i.imgur.com/aLqZmjt.png)](#getting-started)

## Getting Started

### Installation

Install Next.js

```shell
npx create-next-app
```

Install the dependencies

```shell
npm install twin.macro tailwindcss styled-components @zeit/next-css
```

<details>
  <summary>Install with Yarn</summary>

```shell
yarn create next-app
```

Install the dependencies

```shell
yarn add twin.macro tailwindcss styled-components @zeit/next-css
```

</details>

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

You can add Twin’s `GlobalStyles` import in `pages/_app.js`:

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

Add this babel configuration in `.babelrc`:

```js
// In .babelrc
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    "babel-plugin-macros",
    ["styled-components", { "ssr": true }]
  ]
}
```

### Add the next config

Add this next configuration in `next.config.js`:

```js
// next.config.js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { fs: 'empty' }
    }

    return config
  },
})
```

> 'fs' is a server-side dependency which we don’t want added client-side. Adding the code above will make sure you don’t experience errors.


### Add the server stylesheet

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
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
```

### Complete the TypeScript setup

To complete the TypeScript setup, you’ll need to add the remaining types for your chosen css-in-js framework.

<details>
  <summary>Setup instructions</summary>

Twin needs some type declarations added for your chosen css-in-js library, otherwise you’ll see errors like this:

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
      as?: string
    }
  }
}
```

Then add the following in `tsconfig.json`:

```typescript
// tsconfig.json
{
  "files": ["twin.d.ts"],
  // or
  // "include": ["twin.d.ts"],
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



[![-----------------------------------------------------](https://i.imgur.com/aLqZmjt.png)](#customization)

## Customization

### Twin Options

| Name                  | Type      | Default                | Description                                                                                                               |
| --------------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| config                | `string`  | `"tailwind.config.js"` | The path to your Tailwind config                                                                                          |
| preset                | `string`  | `"emotion"`            | The css-in-js library behind the scenes - also supports 'styled-components' and 'goober'                                  |
| autoCssProp           | `boolean` | `true`                 | This code automates the import of 'styled-components/macro' so you can use their css prop                                 |
| hasSuggestions        | `boolean` | `true`                 | Display class suggestions when a class isn't found                                                                        |
| dataTwProp            | `boolean` | `true`                 | Add a prop to your elements in development so you can see the original tailwind classes, eg: `<div data-tw="bg-black" />` |
| debugPlugins          | `boolean` | `false`                | Display generated class information in your terminal from your plugins                                                    |
| debug                 | `boolean` | `false`                | Display information in your terminal about the Tailwind class conversions                                                 |
| disableColorVariables | `boolean` | `false`                | Disable css variables in colors (not gradients) to help support IE11/react native                                         |

### Tailwind Config

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
  curl https://raw.githubusercontent.com/tailwindcss/tailwindcss/master/stubs/defaultConfig.stub.js > tailwind.config.js
  ```

  In the config, twin only reads from the `theme: {}` and the `plugins: []` entries, so strip out the rest.

### Plugins

#### External

You can use many Tailwind plugins with twin but there’s no compatibility with other plugins that use the addVariant or addBase functions - those features are coming soon.

> Note: Twin is currently catching up on support for some popular plugins that were updated for Tailwind v2.

See the list of [plugins and support →](https://twin-docs.netlify.app/plugin-support)


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



[![-----------------------------------------------------](https://i.imgur.com/aLqZmjt.png)](#usage)

## Usage

Twin has a couple of different styling techniques to choose from.

### Styled Props

Use Twin’s `tw` prop when you have no conditional styles:

```js
import 'twin.macro'

const Input = () => <input tw="border hover:border-black" />
```

Nest Twin’s `tw` import within a css prop to add conditional styles:

```js
import tw from 'twin.macro'

const stylesInput = ({ hasHover }) => [
  tw`border`, // Add base styles first
  hasHover && tw`hover:border-black`, // Then conditional styles
]

const Input = props => <input css={stylesInput(props)} />
```

Your can add both `tw` and `css` props on the same element:

```js
import tw from 'twin.macro'

const Input = ({ hasHover }) => (
  <input tw="border" css={[hasHover && tw`hover:border-black`]} />
)
```

Or mix sass and tw styles with the css import:

```js
import tw, { css } from 'twin.macro'

const hoverStyles = css`
  &:hover {
    ${tw`text-black`}
  }
`

const stylesInput = ({ hasHover }) => [
    tw`border` // Add base styles first,
    hasHover && hoverStyles // Then conditional styles
]

const Input = props => <input css={stylesInput(props)} />
```

> Tip: Prefer booleans over ternaries to reduce your line length and improve scannability.

### Styled Components

You can also use the tw import to create and style new components:

```js
import tw from 'twin.macro'

const Input = tw.input`border hover:border-black`
```

And clone and style existing components:

```js
const PurpleInput = tw(Input)`border-purple-500`
```

Then switch to the styled import to add conditional styling:

```js
import tw, { styled, css } from 'twin.macro'

const stylesWidth = css`border: 1px solid hotpink`,

const Input = styled.input(({ hasHover }) => [
    tw`border rounded`, // Add base styles first
    hasHover && tw`hover:border-black`, // Then conditional styles
    !hasHover && stylesWidth // Then any css/sass in variables
])

const Component = () => <Input hasHover />
```



[![-----------------------------------------------------](https://i.imgur.com/aLqZmjt.png)](#next-steps)

## Next Steps

Learn more about styled-components

- [The css prop](https://styled-components.com/docs/api#css-prop)
- [The css import](https://styled-components.com/docs/api#css)
- [The styled import](https://styled-components.com/docs/api#styled)


View more styled-components examples

- [React](https://github.com/ben-rogerson/twin.examples/tree/master/react-styled-components)
- [Preact](https://github.com/ben-rogerson/twin.examples/tree/master/preact-styled-components)
- [Create React App](https://github.com/ben-rogerson/twin.examples/tree/master/cra-styled-components)
- [Gatsby](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-styled-components)
- Next.js (current)
- [Snowpack](https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components)
