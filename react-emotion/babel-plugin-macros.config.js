module.exports = {
  twin: {
    styled: {
      import: 'default',
      from: '@emotion/styled'
    },
    css: {
      import: 'css',
      from: '@emotion/react'
    },
    global: {
      import: 'Global',
      from: '@emotion/react'
    },
    config: 'tailwind.config.js',
    debugProp: true,
    debugPlugins: false,
    debug: false
  }
}
