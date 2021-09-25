[](#webpack--styled-components--typescript)

# Webpack + styled-components + TypeScript

This example uses [Webpack 5](https://webpack.js.org/) to build a [React](https://reactjs.org/) App written in [TypeScript](https://www.typescriptlang.org/) and styled with [Twin](https://github.com/ben-rogerson/twin.macro) + [styled-components](https://styled-components.com/).

- The [react preset](https://github.com/ben-rogerson/twin.examples/blob/master/webpack-styled-components-typescript/.babelrc) uses the automatic runtime that doesn’t require a react import to use jsx.
- Included is the twin companion plugin, [babel-plugin-twin](https://github.com/ben-rogerson/babel-plugin-twin) which enables the tw prop without having to import twin (optional).
- Types for the `styled` and `css` imports pass through twin from styled-components in [types/twin.d.ts](https://github.com/ben-rogerson/twin.examples/blob/master/webpack-styled-components-typescript/types/twin.d.ts).

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/webpack-styled-components-typescript folder-name
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

Learn more about styled-components

- [The css prop](https://styled-components.com/docs/api#css-prop)
- [The css import](https://styled-components.com/docs/api#css)
- [The styled import](https://styled-components.com/docs/api#styled)
