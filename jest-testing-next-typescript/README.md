# Jest + React Testing Library + Next.js + TypeScript

This repo shows a minimal example of how to test a Next.js app with Jest and React Testing Library.

By default, `nextJest` will use the `swc` jest transformer to run over our files - we override this with `babel-jest`.

This setup can also be used outside next - just remove the next-specific parts from the config.

## Key files

- `jest.config.js`: The main config - you'll see configs for both `styled-components` and `emotion`.
- `components/Test.test.tsx`: A test example.

## Getting started

1. Install packages: `npm install`
2. Run tests: `npm test`
