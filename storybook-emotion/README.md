# Storybook + Emotion

This repository demonstrates the Storybook setup with React and Emotion.

**[🔥 Demo this example on CodeSandbox →](https://codesandbox.io/s/github/ben-rogerson/twin.examples/tree/master/storybook-emotion?file=/components/Button.stories.js)**

### Notes

It’s based on the [react-emotion demo](https://github.com/ben-rogerson/twin.examples/tree/master/react-emotion) and uses [@emotion/babel-plugin-jsx-pragmatic](https://github.com/emotion-js/emotion/tree/master/packages/babel-plugin-jsx-pragmatic) to automatically add the css/tw prop with a custom babel configuration.

If you want storybook to use your projects babel configuration then delete `.babelrc` in `.storybook`.

If you’re seeing this error:

```bash
Module not found: Error: Can’t resolve '@emotion/styled/base' in '...'
```

This error comes from `@emotion/babel-preset-css-prop` which doesn’t work with Emotion@11+ outside of Next.js.

Fix: Remove `@emotion/babel-preset-css-prop` from your storybook .babelrc:

### Links

- [Storybook](https://storybook.js.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
