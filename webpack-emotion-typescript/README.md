# Twin + Webpack + Emotion + TypeScript

<p><a href="https://github.com/ben-rogerson/twin.macro#gh-light-mode-only" target="_blank"><img src="../.github/twin-light.svg" alt="Twin" width="60" height="70"></a><a href="https://github.com/ben-rogerson/twin.macro#gh-dark-mode-only" target="_blank"><img src="../.github/twin-dark.svg" alt="Twin" width="60" height="70"></a><a href="https://webpack.js.org/" target="_blank"><img src="../.github/webpack.svg" alt="Webpack" width="60" height="70"></a><a href="https://emotion.sh/docs/introduction" target="_blank"><img src="../.github/emotion.svg" alt="Emotion" width="60" height="70"></a><a href="https://www.typescriptlang.org/" target="_blank"><img src="../.github/typescript.svg" alt="TypeScript" width="60" height="70"></a>
</p>

This example uses [Webpack](https://webpack.js.org/) to build a [React](https://reactjs.org/) App written in [TypeScript](https://www.typescriptlang.org/) and styled with [Twin](https://github.com/ben-rogerson/twin.macro) + [Emotion](https://emotion.sh/).

- To add the css prop, we use [@emotion/babel-preset-css-prop](https://emotion.sh/docs/@emotion/babel-preset-css-prop) and set the [jsxImportSource in tsconfig.json](https://github.com/ben-rogerson/twin.examples/blob/master/webpack-emotion-typescript/tsconfig.json).
- The [react preset](https://github.com/ben-rogerson/twin.examples/blob/master/webpack-emotion-typescript/.babelrc) uses the automatic runtime that doesn’t require a react import to use jsx.
- Included is the twin companion plugin, [babel-plugin-twin](https://github.com/ben-rogerson/babel-plugin-twin) which enables the tw prop without having to import twin (optional).
- Types for the `styled` and `css` imports pass through twin from emotion in [types/twin.d.ts](https://github.com/ben-rogerson/twin.examples/blob/master/webpack-emotion-typescript/types/twin.d.ts).

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/webpack-emotion-typescript folder-name
```

From within the new folder, run `npm install`, then `npm start` to start the dev server.

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
