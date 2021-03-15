# Twin + Next + Stitches (Experimental)

This example shows how to use the [Stitches CSS-in-JS Library](https://github.com/modulz/stitches) with twin.macro.

```shell
npx degit https://github.com/ben-rogerson/twin.examples/next-stitches folder-name
```

### TODO

- [ ] Fix gradients (they don’t respect `disabledColorVariables: true`)
- [ ] Add `tw.div` syntax
- [ ] Add `styled.div` syntax
- [ ] Global styles should be added automatically by Twin
- [ ] Add support for plugins using `addBase`
- [ ] Add `styled`/`css` imports through twin

The css/tw props aren’t supported because stitches uses a styled-components syntax (`styled('div', {})`).
