# Twin component library monorepo

This setup demonstrates a React app using a typescript component library.

The trick is to use Babel to compile typescript (rather than [rollup-plugin-typescript](https://www.npmjs.com/package/rollup-plugin-typescript2) and rely on typescript for type checking and generation of declaration files. You'll receive faster builds and can still use the Babel plugins you're used to.

## Getting started

Clone this repository:

`npx degit https://github.com/ben-rogerson/twin.examples/twin-component-library-monorepo folder-name`

### npm@7 install

If you'd like to use npm's new workspace feature, you can run `npx npm@7 install` and start the app server with `npm run start`.
You may also need to `npm install` in each of the sub folders.

### Lerna install

If you'd rather use [Lerna](https://lerna.js.org) then it should slot right in, just change the line in `package.json` to ("packages": ["packages/*"]) and follow their [installation instructions](https://lerna.js.org/#getting-started).

## Tech

### Components (packages/components)

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
- [Parcel](https://parceljs.org/)

### App (packages/app)

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
- [Rollup.js](https://rollupjs.org/guide/en/)
