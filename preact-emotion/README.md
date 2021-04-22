<p><img src="https://i.imgur.com/x25Owe2.png" alt="twin, preact, emotion" width="500"></p>

Download this example using [degit](https://github.com/Rich-Harris/degit):

```shell
npx degit https://github.com/ben-rogerson/twin.examples/preact-emotion folder-name
```

Or keep scrolling for installation instructions.

[](#getting-started)

## Getting started

### Installation

Instructions coming soon.

[](#customization)

## Customization

### Twin options

| Name                  | Type               | Default                | Description                                                                                                                                                         |
| --------------------- | ------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| config                | `string`           | `"tailwind.config.js"` | The path to your Tailwind config                                                                                                                                    |
| preset                | `string`           | `"emotion"`            | The css-in-js library behind the scenes - also supports 'styled-components' and 'goober'.                                                                           |
| hasSuggestions        | `boolean`          | `true`                 | Display suggestions when a class isn’t found                                                                                                                        |
| dataTwProp            | `boolean`/`string` | `true`                 | Add a prop to your elements in development so you can see the original tailwind classes, eg: `<div data-tw="bg-black" />`, add `all` to keep the prop in production |
| debugPlugins          | `boolean`          | `false`                | Display generated class information in your terminal from your plugins                                                                                              |
| debug                 | `boolean`          | `false`                | Display information in your terminal about the Tailwind class conversions                                                                                           |
| disableColorVariables | `boolean`          | `false`                | Disable css variables in colors (not gradients) to help support IE11/react native                                                                                   |
| includeClassNames     | `boolean`          | `false`                | Look in className props for tailwind classes to convert                                                                                                             |
| dataCsProp            | `boolean`          | `true`                 | Add a prop to your elements in development so you can see the original cs prop classes, eg: `<div data-cs="maxWidth[1em]" />`                                       |
| disableCsProp         | `boolean`          | `false`                | Disable twin from reading values specified in the cs prop.                                                                                                          |

### Tailwind config

For style customizations, add a `tailwind.config.js` in your project root.

> It’s important to know that you don’t need a `tailwind.config.js` to use Twin. You already have access to every class with every variant.
> Unlike Tailwind, twin.macro only generates styles for the classes so you don’t need to use [PurgeCSS](https://purgecss.com/).

Choose from one of the following configs:

- a) Start with an empty config:

  ```js
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        colors: {},
      },
    },
    plugins: [],
  }
  ```

- b) Start with a [full config](https://raw.githubusercontent.com/tailwindcss/tailwindcss/master/stubs/defaultConfig.stub.js):

  ```shell
  # cd into your project folder then:
  npx tailwindcss-cli@latest init --full
  ```

  In the config, twin only reads the `darkMode`, `theme` and `plugins` entries, so feel free to remove the rest.

### Plugins

#### External

You can use many Tailwind plugins with twin, like [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography) and [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) but there’s no compatibility with plugins that use the `addVariant` functions.

[See list of supported plugins →](https://twin-docs.netlify.app/plugin-support)

#### Custom classes

You can add your own custom css within a plugin. Here’s an example of a custom class that adds breakpoint based paddings from theme values:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [paddings],
}

function paddings({ addComponents, theme }) {
  addComponents({
    '.my-padding': {
      '@screen md': {
        'padding-left': theme`padding.3`,
        'padding-right': theme`padding.3`,
      },
      '@screen lg': {
        'padding-left': theme`padding.6`,
        'padding-right': theme`padding.6`,
      },
    },
  })
}
```

[](#next-steps)

## Next steps

Learn how to work with twin

- [The prop styling guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/prop-styling-guide.md) - A must-read guide to level up on prop styling
- [The styled component guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/styled-component-guide.md) - A must-read guide on getting productive with styled-components

Learn more about emotion

- [Emotion’s css prop](https://emotion.sh/docs/css-prop)
- [Emotion’s css import](https://emotion.sh/docs/css-prop#string-styles)
- [Emotion’s styled import](https://emotion.sh/docs/styled)

View more emotion examples

- [React](https://github.com/ben-rogerson/twin.examples/tree/master/react-emotion)
- Preact (current)
- [Create React App](https://github.com/ben-rogerson/twin.examples/tree/master/cra-emotion)
- [Gatsby](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-emotion)
- [Next.js](https://github.com/ben-rogerson/twin.examples/tree/master/next-emotion)
- [Snowpack](https://github.com/ben-rogerson/twin.examples/tree/master/snowpack-react-emotion)
