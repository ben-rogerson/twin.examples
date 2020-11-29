<a href="#"><img src="https://i.imgur.com/x9LMZVI.png" alt="twin, storybook, emotion" width="550"></a>

This repository demonstrates a Storybook setup with Emotion in React.

## Getting started

Either check out the setup in the attached repository or clone this repository with degit:

```js
npx degit https://github.com/ben-rogerson/twin.examples/storybook-emotion folder-name
```

## Notes

It’s based on the [react-emotion demo](https://github.com/ben-rogerson/twin.examples/tree/master/react-emotion) and uses [@emotion/babel-plugin-jsx-pragmatic](https://github.com/emotion-js/emotion/tree/master/packages/babel-plugin-jsx-pragmatic) to automatically add the css/tw prop with a custom babel configuration.

If you want storybook to use your projects babel configuration then delete `.babelrc` in `.storybook`.

If you’re seeing this error:

```bash
Module not found: Error: Can’t resolve '@emotion/styled/base' in '...'
```

This error comes from `@emotion/babel-preset-css-prop` which has issues with Emotion@11+.

Fix: Remove `@emotion/babel-preset-css-prop` just from the .babelrc your storybook uses.

## Links

- [Storybook](https://storybook.js.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
