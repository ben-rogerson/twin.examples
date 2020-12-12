<a href="https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/gatsby-emotion?file=/src/App.js"><img src="https://i.imgur.com/zqspwBF.png" alt="twin, gatsby, emotion" width="500"></a>

**[🔥 Demo this example on CodeSandbox →](https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/gatsby-emotion?file=/src/App.js)**

Or download this example using [degit](https://github.com/Rich-Harris/degit):

```shell
npx degit https://github.com/ben-rogerson/twin.examples/gatsby-emotion folder-name
```

Or keep scrolling for installation instructions.


[](#table-of-contents)

## Table of contents

* [Getting started](#getting-started)
	* [Installation](#installation)
	* [Add gatsby-plugin-emotion](#add-gatsby-plugin-emotion)
	* [Add the global styles](#add-the-global-styles)
	* [Add the twin config (optional)](#add-the-twin-config-optional)
	* [Complete the TypeScript setup](#complete-the-typescript-setup)
* [Customization](#customization)
	* [Twin options](#twin-options)
	* [Tailwind config](#tailwind-config)
	* [Plugins](#plugins)
		* [External](#external)
		* [Custom classes](#custom-classes)
* [Usage](#usage)
	* [Styled props](#styled-props)
	* [Styled components](#styled-components)
* [Next steps](#next-steps)


[](#getting-started)

## Getting started

### Installation

Install Gatsby

```shell
npx gatsby new gatsby-site
```

Install the dependencies

```shell
npm install twin.macro tailwindcss @emotion/react @emotion/styled gatsby-plugin-emotion
```

<details>
  <summary>Yarn instructions</summary>

Install Gatsby

```shell
npx gatsby new gatsby-site
```

Install the dependencies

```shell
yarn add twin.macro tailwindcss @emotion/react @emotion/styled gatsby-plugin-emotion
```

</details>

### Add gatsby-plugin-emotion

Add the plugin to your `gatsby-config.js`:

```js
// gatsby-config.js
module.exports = {
  plugins: [{ resolve: `gatsby-plugin-emotion` }],
}
```

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

As we should only add the `GlobalStyles` import once in our project, it’s a good idea to put it in a layout file. You can add Twin’s `GlobalStyles` import in a new file called `src/components/Layout.js`:

```js
// src/components/Layout.js
import React from 'react'
import { GlobalStyles } from 'twin.macro'

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    {children}
  </div>
)

export default Layout
```

Then in your pages, wrap your content with the layout:

```js
// src/pages/index.js
import Layout from './../components/Layout'

const App = () => <Layout>{/* ... */}</Layout>
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


### Complete the TypeScript setup

To complete the TypeScript setup, you’ll need to add the remaining types for your chosen css-in-js framework.

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

// The css prop
// https://emotion.sh/docs/typescript#css-prop
import {} from '@emotion/react/types/css-prop'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
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



[](#customization)

## Customization

### Twin options

| Name                  | Type      | Default                | Description                                                                                                               |
| --------------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| config                | `string`  | `"tailwind.config.js"` | The path to your Tailwind config                                                                                          |
| preset                | `string`  | `"emotion"`            | The css-in-js library behind the scenes - also supports 'styled-components' and 'goober'.                                 |
| hasSuggestions        | `boolean` | `true`                 | Display suggestions when a class isn’t found                                                                              |
| dataTwProp            | `boolean` | `true`                 | Add a prop to your elements in development so you can see the original tailwind classes, eg: `<div data-tw="bg-black" />` |
| debugPlugins          | `boolean` | `false`                | Display generated class information in your terminal from your plugins                                                    |
| debug                 | `boolean` | `false`                | Display information in your terminal about the Tailwind class conversions                                                 |
| disableColorVariables | `boolean` | `false`                | Disable css variables in colors (not gradients) to help support IE11/react native                                         |

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
  curl https://raw.githubusercontent.com/tailwindcss/tailwindcss/master/stubs/defaultConfig.stub.js > tailwind.config.js
  ```

  In the config, twin only reads from the `theme: {}` and the `plugins: []` entries, so strip out the rest.

### Plugins

#### External

You can use many Tailwind plugins with twin, like [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography) and [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) but there’s no compatibility with plugins that use the `addVariant` functions (support coming soon).

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



[](#usage)

## Usage

Twin has a couple of different styling techniques to choose from.

### Styled props

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

### Styled components

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



[](#next-steps)

## Next steps

Learn more about emotion

- [Emotion’s css prop](https://emotion.sh/docs/css-prop)
- [Emotion’s css import](https://emotion.sh/docs/css-prop#string-styles)
- [Emotion’s styled import](https://emotion.sh/docs/styled)


View more emotion examples

- [React](https://github.com/ben-rogerson/twin.examples/tree/master/react-emotion)
- [Create React App](https://github.com/ben-rogerson/twin.examples/tree/master/cra-emotion)
- Gatsby (current)
- [Next.js](https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion)
- [Snowpack](https://github.com/ben-rogerson/twin.examples/tree/master/snowpack-react-emotion)
- [Vue (experimental)](https://github.com/ben-rogerson/twin.examples/tree/master/vue-emotion)
