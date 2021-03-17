# Component library with styled-components

This setup demonstrates a TypeScript Next.js app (`packages/app`) importing a separate component library (`packages/shared-ui`) using either [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) or [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

## Features

- Simple workflow: After starting the next app `yarn dev`, you can import the components in `packages/shared-ui` and work on them without having to run or restart a parallel process
- Component types: `shared-ui` component types generate when starting the next dev server or run `yarn types:watch` for live updates while coding in `shared-ui/components`
- Shared config files between packages:
  - `tailwind.config.js`
  - `babel.config.js`
  - Twin config in `package.json` and `types`

## Get started

Use degit to pull down this example:

```shell
npx degit https://github.com/ben-rogerson/twin.examples/component-library-styled-components folder-name
```

From inside the new folder, start the dev server with yarn:

```bash
yarn && yarn build && yarn dev
```

or npm:

```bash
npm install && npm run build && npm run dev
```

> npm@7+ is required to use the [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) feature.<br/>Update to latest with: `npm install -g npm@latest`

## Components (packages/components)

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)

## App (packages/app)

- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [styled-components](https://styled-components.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
