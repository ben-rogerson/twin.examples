# Twin component library monorepo

This setup demonstrates a react app using a component library written in typescript.
The trick is to use babel to compile typescript and use typescript for type checking and declaration file generation.

## Getting started

Clone this repository:

`npx degit https://github.com/ben-rogerson/twin.examples/twin-component-library-monorepo`

Then run `npx npm@7 install` (because we're using the new workspaces here) and start the app server with `npm run start`.
You'll also may need to `npm install` in each of the sub folders.

## Components (packages/components)

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
- [Parcel](https://parceljs.org/)

## App (packages/app)

- Typescript
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
- [Rollup.js](https://rollupjs.org/guide/en/)
