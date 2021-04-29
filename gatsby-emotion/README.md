<p><img src="https://i.imgur.com/zqspwBF.png" alt="twin, gatsby, emotion" width="500"></p>

Download this example using [degit](https://github.com/Rich-Harris/degit):

```shell
npx degit https://github.com/ben-rogerson/twin.examples/gatsby-emotion folder-name
```

Or keep scrolling for installation instructions.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add gatsby-plugin-emotion](#add-gatsby-plugin-emotion)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config (optional)](#add-the-twin-config-optional)
  - [Complete the TypeScript setup](#complete-the-typescript-setup)
- [Customization](#customization)
- [Next steps](#next-steps)

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

const IndexPage = () => <Layout>{/* ... */}</Layout>

export default IndexPage
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

If you’re using TypeScript, you’ll need to add the remaining types for your chosen css-in-js framework.

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

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}
```

Then add the following to your typescript config:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "jsxImportSource": "@emotion/react" // for the css prop
  },
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

View more emotion examples

- [React](https://github.com/ben-rogerson/twin.examples/tree/master/react-emotion)
- [Preact](https://github.com/ben-rogerson/twin.examples/tree/master/preact-emotion)
- [Create React App](https://github.com/ben-rogerson/twin.examples/tree/master/cra-emotion)
- Gatsby (current)
- [Next.js](https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion)
- [Snowpack](https://github.com/ben-rogerson/twin.examples/tree/master/snowpack-react-emotion)
