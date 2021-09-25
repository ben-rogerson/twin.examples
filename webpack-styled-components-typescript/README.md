# Webpack + styled-components + TypeScript

This example uses [Webpack](https://webpack.js.org/) to build a [React](https://reactjs.org/) App written in [TypeScript](https://www.typescriptlang.org/) and styled with [Twin](https://github.com/ben-rogerson/twin.macro) + [styled-components](https://styled-components.com/).

- The [react preset](https://github.com/ben-rogerson/twin.examples/blob/master/webpack-styled-components-typescript/.babelrc) uses the automatic runtime that doesn’t require a react import to use jsx.
- Included is the twin companion plugin, [babel-plugin-twin](https://github.com/ben-rogerson/babel-plugin-twin) which enables the tw prop without having to import twin (optional).
- Types for the `styled` and `css` imports pass through twin from styled-components in [types/twin.d.ts](https://github.com/ben-rogerson/twin.examples/blob/master/webpack-styled-components-typescript/types/twin.d.ts).

## Download example using [degit](https://github.com/Rich-Harris/degit)

```shell
npx degit https://github.com/ben-rogerson/twin.examples/webpack-styled-components-typescript folder-name
```

From within the new folder, run `npm install`, then `npm start` to start the dev server.
