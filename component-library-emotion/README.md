# Component library with emotion

This setup demonstrates a React app using a typescript component library.

The trick is to use Babel to compile typescript (rather than [rollup-plugin-typescript](https://www.npmjs.com/package/rollup-plugin-typescript2) and rely on typescript for type checking and generation of declaration files. You'll receive faster builds and can still use the Babel plugins you're used to.

## Getting started

Clone this repository:

```shell
npx degit https://github.com/ben-rogerson/twin.examples/component-library-emotion folder-name
```

Inside the project folder, install the dependencies using yarn workspaces:

```shell
yarn install
```

And start the dev server:

```shell
yarn dev
```

### Components (packages/components)

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [emotion](https://emotion.sh/docs/introduction)
- [Twin](https://github.com/ben-rogerson/twin.macro)
- [rollup.js](https://rollupjs.org/)

### App (packages/app)

- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [emotion](https://emotion.sh/docs/introduction)
- [Twin](https://github.com/ben-rogerson/twin.macro)
