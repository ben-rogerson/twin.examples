# Twin + Jest + React Testing Library + TypeScript

<p><a href="https://jestjs.io/" target="_blank"><img src="../.github/jest.svg" alt="Jest" width="60" height="70"></a><a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank"><img src="../.github/react-testing-library.svg" alt="React Testing Library" width="60" height="70"></a><a href="https://www.typescriptlang.org/" target="_blank"><img src="../.github/typescript.svg" alt="TypeScript" width="60" height="70"></a>
</p>

This repo shows a minimal example of how to test a Next.js app with Jest and React Testing Library.

This setup can also be used outside Next.js - just remove the next-specific parts from the config.

By default, `nextJest` will use the `swc` jest transformer, but here we override this with `babel-jest`.

## Key files

- `jest.config.js`<br/>The main config - you'll see options for both `styled-components` and `emotion`.
- `components/Test.test.tsx`<br/>A test example.

## Getting started

1. Install packages: `npm install`
2. Run tests: `npm test`
