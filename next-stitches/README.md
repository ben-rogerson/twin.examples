# Twin + Next + Stitches (Experimental)

This example shows how to use the [Stitches CSS-in-JS Library](https://github.com/modulz/stitches) with twin.macro.

I’ve installed `@stitches/react@0.0.3-canary.1` to fix some [global ssr issues](https://github.com/modulz/stitches/pull/208). Check the [release notes](https://github.com/hauptrolle/stitches-utils/issues/8#issuecomment-694362851).

### Get started

Use degit to pull down this example:

```shell
npx degit https://github.com/ben-rogerson/twin.examples/next-stitches folder-name
```

From inside the new folder, start the dev server:

```bash
npm install && npm run build && npm run dev
# or
yarn && yarn build && yarn dev
```

### TODO

- [ ] Fix gradients (they don’t respect `disabledColorVariables: true`)
- [ ] Add `tw.div` syntax
- [ ] Add `styled.div` syntax
- [ ] Global styles should be added automatically by Twin
- [ ] Add support for plugins using `addBase`
- [ ] Add `styled`/`css` imports through twin

The css/tw props aren’t supported because stitches uses a styled-components syntax (`styled('div', {})`).
