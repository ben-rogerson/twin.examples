# Twin + Vite + Solid + TypeScript

<p><a href="https://github.com/ben-rogerson/twin.macro#gh-light-mode-only" target="_blank"><img src="../.github/twin-light.svg" alt="Twin" width="60" height="70"></a><a href="https://github.com/ben-rogerson/twin.macro#gh-dark-mode-only" target="_blank"><img src="../.github/twin-dark.svg" alt="Twin" width="60" height="70"></a><a href="https://vitejs.dev/" target="_blank"><img src="../.github/vite.svg" alt="Vite" width="50" height="70"></a><a href="https://github.com/solidjs/solid-styled-components" target="_blank"><img src="../.github/solid.svg" alt="Solid" width="50" height="70"></a><a href="https://www.typescriptlang.org/" target="_blank"><img src="../.github/typescript.svg" alt="TypeScript" width="60" height="70"></a></p>

---

**Integration status**

This integration is new so we're missing some types still (submit improvements please).

- Styled array syntax works but there are no types for it yet:

  ```typescript
  const Component = styled('button')(props => [tw`bg-black`])
  ```

  Use object syntax instead:

  ```typescript
  const Component = styled('button')(props => ({ ...tw`bg-black` }))
  ```

- `@emotion/serialize` is used for the css prop types.

---

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/vite-solid-typescript folder-name
```

From within the new folder, run `npm install`, then `npm run dev` to start the dev server.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config](#add-the-twin-config)
  - [Add the vite config](#add-the-vite-config)
  - [Add TypeScript types](#add-typescript-types)
- [Customization](#customization)
- [Next steps](#next-steps)

[](#getting-started)

## Getting started

### Installation

Install Vite with the Solid TypeScript template

```shell
npm create vite@latest my-app -- --template solid-ts
```

Install the dependencies

```shell
npm install ts-deepmerge twin.macro solid-styled-components babel-plugin-macros tailwindcss
npm install -D @emotion/serialize
```

- `ts-deepmerge` is used to deeply merge the twin with your own global styles.

### Add the global styles

Twin uses the same preflight base styles as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

You can import `GlobalStyles` within a new file placed in `src/styles/GlobalStyles.tsx`:

```js
// src/styles/GlobalStyles.tsx
import { StylesArg, createGlobalStyles } from 'solid-styled-components'
import tw, { theme, globalStyles } from 'twin.macro'
import merge from 'ts-deepmerge'

const CustomStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}

const GlobalStyles = createGlobalStyles(
  merge(globalStyles, CustomStyles) as StylesArg,
)

export default GlobalStyles
```

Then import the GlobalStyles file in `src/index.tsx`:

```js
// src/index.tsx
/* @refresh reload */
import { render } from 'solid-js/web'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'

const root = document.getElementById('root')

render(
  () => (
    <>
      <GlobalStyles />
      <App />
    </>
  ),
  root!,
)
```

### Add the twin config

Twin’s config can be added in a couple of different files.

a) Either in `babel-plugin-macros.config.js`:

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'solid',
  },
}
```

b) Or in `package.json`:

```js
// package.json
"babelMacros": {
  "twin": {
    "preset": "solid"
  }
},
```

### Add the vite config

Add the following to your vite config:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  plugins: [
    solid({
      babel: {
        plugins: ['babel-plugin-macros'],
      },
    }),
  ],
})
```

### Add TypeScript types

Create a `types/twin.d.ts` file with the declarations from the example:

```shell
mkdir types && cd $_ && curl -o twin.d.ts -L https://github.com/ben-rogerson/twin.examples/raw/master/vite-solid-typescript/types/twin.d.ts
```

Then add the `types` folder to the include array in your typescript config:

```json
// tsconfig.json
{
  // ...
  "include": ["src", "types"]
}
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

Learn more about [solid-styled-components](https://github.com/solidjs/solid-styled-components)
