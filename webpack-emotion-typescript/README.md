# Webpack + Emotion + TypeScript

This example uses [Webpack](https://webpack.js.org/) to build a [React](https://reactjs.org/) App written in [TypeScript](https://www.typescriptlang.org/) and styled with [Twin](https://github.com/ben-rogerson/twin.macro) + [Emotion](https://emotion.sh/).

- To add the css prop, we use [@emotion/babel-preset-css-prop](https://emotion.sh/docs/@emotion/babel-preset-css-prop) and set the [jsxImportSource in tsconfig.json](https://github.com/ben-rogerson/twin.examples/blob/master/webpack-emotion-typescript/tsconfig.json).
- The [react preset](https://github.com/ben-rogerson/twin.examples/blob/master/webpack-emotion-typescript/.babelrc) uses the automatic runtime that doesn’t require a react import to use jsx.
- Included is the twin companion plugin, [babel-plugin-twin](https://github.com/ben-rogerson/babel-plugin-twin) which enables the tw prop without having to import twin (optional).
- Types for the `styled` and `css` imports pass through twin from emotion in [types/twin.d.ts](https://github.com/ben-rogerson/twin.examples/blob/master/styled-components-webpack-typescript/types/twin.d.ts).

## Download example using [degit](https://github.com/Rich-Harris/degit)

```shell
npx degit https://github.com/ben-rogerson/twin.examples/webpack-emotion-typescript folder-name
```

From within the new folder, run `npm install`, then `npm start` to start the dev server.
