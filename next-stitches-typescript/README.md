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
const Link = styled('div', {
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

Or use `css` to apply styling onto existing elements:

```js
import tw from 'twin.macro'
import { css } from '../stitches.config'

const LogoLink = css(tw`w-32 mb-10 p-5 block opacity-50 hover:opacity-100`)

const WebsiteLink = () => (
  <a href="#" className={LogoLink()}>
    Visit website
  </a>
)
```

- Twin’s css and tw props aren’t supported because stitches uses the styled-components syntax

- Stitches has made many improvements lately - make sure you check their [migration guide](https://stitches-site-git-beta.modulz-deploys.com/blog/migrating-from-alpha-to-beta) while their website is getting updated

### Get started

Use degit to pull down this example:

```shell
npx degit https://github.com/ben-rogerson/twin.examples/next-stitches-typescript folder-name
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

- [ ] Add global styles via the twin GlobalStyles import
- [ ] Add support for plugins using `addBase`
