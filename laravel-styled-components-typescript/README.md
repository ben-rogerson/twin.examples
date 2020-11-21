# Laravel + styled-components + TypeScript

This starter shows how to use Tailwind with a React frontend and a Laravel backend.
TypeScript is only used for type checking and Babel is used for compiling. This improves the [compilation speed](https://iamturns.com/typescript-babel/) and works with [twin.macro](https://github.com/ben-rogerson/twin.macro).

## Getting started

1. Install composer: `composer install`
2. Install npm packages: `npm install`
3. Start the server: `php artisan serve`
4. Start the webpack dev server: `npm run hot`

## Notes

- The React app sits in: `resources/js`
- Run `tsc` to check for TypeScript errors

## Changes

This project is a new Laravel project with some adjustments. If you’d like to bring TypeScript + Twin into your project, here’s the list of changes:

- Install npm dependencies - see `package.json`
- Add `babelMacros` config in `package.json`
- Add types within `types` folder
- Add `.babelrc`
- Add `tailwind.config.js`
- Add `tsconfig.json`
- Add `.prettierrc`
- Add .tsx files in `resources/js`
- Adjust `resources/views/welcome.blade.php`
- Adjust `webpack.mix.js`
