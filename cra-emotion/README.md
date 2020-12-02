<a href="https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/cra/emotion?file=/src/App.js"><img src="https://i.imgur.com/dn8SdzU.png" alt="twin, cra, emotion" width="500"></a>

**[🔥 Demo this example on CodeSandbox →](https://codesandbox.io/embed/github/ben-rogerson/twin.examples/tree/master/cra/emotion?file=/src/App.js)**


[![-----------------------------------------------------](https://i.imgur.com/aLqZmjt.png)](#table-of-contents)

## Table of Contents

* [Getting Started](#getting-started)
	* [Installation](#installation)
	* [Add the global styles](#add-the-global-styles)
	* [Add the twin config (optional)](#add-the-twin-config-optional)
	* [Enable babel macros and the jsx pragma](#enable-babel-macros-and-the-jsx-pragma)
	* [Add the types for css and styled (TypeScript only)](#add-the-types-for-css-and-styled-typescript-only)
* [Customization](#customization)
	* [Twin Options](#twin-options)
	* [Tailwind Config](#tailwind-config)
	* [Plugins](#plugins)
		* [External](#external)
		* [Custom classes](#custom-classes)
* [Next Steps](#next-steps)
* [More Emotion Examples](#more-emotion-examples)


[![-----------------------------------------------------](https://i.imgur.com/aLqZmjt.png)](#getting-started)

## Getting Started

### Installation

Install Create React App

```bash
npm init create-react-app my-app
```

Install the dependencies

```
npm install --save twin.macro @emotion/react @emotion/styled
```

### Add the global styles

Projects using Twin use the Tailwind [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) to smooth over cross-browser inconsistencies.

Twin automatically adds the preflight base styles with the `GlobalStyles` import. `GlobalStyles` also includes some [@keyframes](https://github.com/ben-rogerson/twin.macro/blob/master/src/config/globalStyles.js) so the `animate-xxx` classes have animations and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.


You can add Twin’s `GlobalStyles` import in `src/App.js`:

```js
// src/App.js
/** @jsxImportSource @emotion/react */
import React from 'react'
import { GlobalStyles } from 'twin.macro'

const App = () => (
  <div>
    <GlobalStyles />
    <App />
  </div>
)

export default App
```

### Add the twin config (optional)

Twin’s config can get added in a couple of different places.

> By default the preset is emotion, so you only need to add the config to adjust [Twin’s other options](#twin-options).

**a) In a new file named `babel-plugin-macros.config.js` placed in your project root:**

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'emotion',
  },
}
```

**b) Or in your `package.json`:**

```js
// package.json
"babelMacros": {
  "twin": {
    "preset": "emotion"
  }
},
```


### Enable babel macros and the jsx pragma

To use the `tw` and `css` props, emotion must first extend jsx with a [jsx pragma](https://emotion.sh/docs/css-prop#jsx-pragma).

When styling with the tw or css prop, add the pragma at the top of your file. This also replaces the react import, unless you’re using fragments `<>`:

```js
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

const Input = () => <input tw="bg-black" />
// or
const Input = () => <input css={tw`bg-black`} />
```

You can automate the injection of the jsx pragma but you’ll need to use a package like [rewire create react app](https://github.com/timarney/react-app-rewired) to allow changes to the project `.babelrc`. Check the [twin emotion + react docs](https://github.com/ben-rogerson/twin.examples/blob/master/react-emotion/README.md) for the babel config to use.

> Note: After build, if you’re seeing "process is not defined" then npm install and add `"babel-plugin-transform-inline-environment-variables"` to .babelrc

### Add the types for css and styled (TypeScript only)

Twin comes with types for every import except the `css` and `styled`.

<details>
  <summary>Setup TypeScript in Twin + Emotion</summary>

Twin needs some type declarations added, otherwise you’ll see errors like this:

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
import "twin.macro";
import styledImport from "@emotion/styled";
import { css as cssImport } from "@emotion/react";

// The css prop
// https://emotion.sh/docs/typescript#css-prop
import {} from "@emotion/react/types/css-prop";

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string;
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
import tw, { css, styled, theme } from "twin.macro";
```

And these props:

```typescript
<div tw="">
<div css={}>
```

---

</details>



[![-----------------------------------------------------](https://i.imgur.com/aLqZmjt.png)](#customization)

## Customization

### Twin Options

| Name                  | Type      | Default                | Description                                                                                                               |
| --------------------- | --------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| config                | `string`  | `"tailwind.config.js"` | The path to your Tailwind config                                                                                          |
| preset                | `string`  | `"emotion"`            | The css-in-js library behind the scenes - also supports 'styled-components' and 'goober'.                                 |
| hasSuggestions        | `boolean` | `true`                 | Display suggestions when a class isn’t found                                                                              |
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
  };
  ```

- b) Start with a [full config](https://raw.githubusercontent.com/tailwindcss/tailwindcss/master/stubs/defaultConfig.stub.js):

  ```bash
  # cd into your project folder then:
  curl https://raw.githubusercontent.com/tailwindcss/tailwindcss/master/stubs/defaultConfig.stub.js > tailwind.config.js
  ```

  In the config, twin only reads from the `theme: {}` and the `plugins: []` entries, so strip out the rest.

### Plugins

#### External

You can use many Tailwind plugins with twin but there’s currently no compatibility with plugins that use the `addVariant` or `addBase` functions.
Support for those features is planned for release in December 2020/January 2021.

- [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) - Support for <v0.3.0 (v0.3.0+ requires verification)
- [@tailwindcss/forms](https://github.com/tailwindcss/custom-forms) support is coming - [Follow this issue for updates](https://github.com/ben-rogerson/twin.macro/issues/225)

Check out the [list of supported plugins →](https://twin-docs.netlify.app/plugin-support)


#### Custom classes

This example adds a custom class that changes at different screen sizes:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [paddings],
}

function paddings({ addComponents, theme }) {
  addComponents({
    '.custom-paddings': {
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



[![-----------------------------------------------------](https://i.imgur.com/aLqZmjt.png)](#next-steps)

## Next Steps

- Learn how to use the emotion library<br/>
  The [css prop](https://emotion.sh/docs/css-prop) / [css import](https://emotion.sh/docs/css-prop#string-styles) / [styled import](https://emotion.sh/docs/styled)


[![-----------------------------------------------------](https://i.imgur.com/aLqZmjt.png)](#more-emotion-examples)

## More Emotion Examples

- [React](https://github.com/ben-rogerson/twin.examples/blob/master/react-emotion)
- Create React App (current)
- [Gatsby](https://github.com/ben-rogerson/twin.examples/blob/master/gatsby-emotion)
- [Next.js](https://github.com/ben-rogerson/twin.examples/blob/master/next-emotion)
- [Snowpack](https://github.com/ben-rogerson/twin.examples/blob/master/snowpack-react-emotion)
- [Vue (experimental)](https://github.com/ben-rogerson/twin.examples/blob/master/)
