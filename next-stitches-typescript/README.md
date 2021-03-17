<p><img src="https://i.imgur.com/AJzYKmM.png" alt="twin, next, stitches" width="500"></p>

This example shows how to use [Stitches (canary)](https://github.com/modulz/stitches) css-in-js library with [twin.macro](https://github.com/ben-rogerson/twin.macro).

### Usage

Use twin’s `tw` and `theme` imports within the Stitches `styled` function:

```js
import tw from 'twin.macro'
import { styled } from '../stitches.config'

// Non-conditional styling
const Link = styled.a(tw`text-red-500 max-width[200px]`)

// Conditional styling
const Link = styled.div({
  // Spread component base styling in at the top
  ...tw`text-red-500 max-width[200px]`,
  // Add conditional styles with variants from Stitches
  // (it differs from “variants” in tailwind)
  variants: {
    hasBackground: {
      true: tw`bg-gradient-to-b from-electric to-ribbon`,
    },
  },
})
```

- Twin’s css and tw props aren’t supported because stitches uses the styled-components syntax

- I’ve installed `@stitches/react@0.1.3-canary.20` to fix some [global ssr issues](https://github.com/modulz/stitches/pull/208). Stitches has made other improvements in their canary releases - make sure you check their [migration guide](https://stitches-site-git-beta.modulz-deploys.com/blog/migrating-from-alpha-to-beta)

- I’ll remove the “canary” status after Stitches releases v0.1.3

### Get started

Use degit to pull down this example:

```shell
npx degit https://github.com/ben-rogerson/twin.examples/next-stitches folder-name
```

From inside the new folder, start the dev server with npm:

```bash
npm install && npm run build && npm run dev
```

or yarn:

```bash
yarn && yarn build && yarn dev
```

### Twin integration status

- [ ] Add `tw.div` syntax
- [ ] Add global styles via the twin GlobalStyles import
- [ ] Add support for plugins using `addBase`
- [ ] Add `styled`/`css` imports through twin
