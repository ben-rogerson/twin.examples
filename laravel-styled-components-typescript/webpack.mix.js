const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

require('laravel-mix-react-typescript-extension')

mix.reactTypeScript('resources/js/app.tsx', 'public/js')

mix.webpackConfig({
  devServer: {
    // overlay: false,
    watchOptions: {
      poll: 200, // Lower for faster reloads (more cpu intensive)
      ignored: ['node_modules', 'vendor']
    }
  }
})
