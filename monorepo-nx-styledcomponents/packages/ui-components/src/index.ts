import { resolve } from 'path';

export * from './lib/component-a';

export const withTailwindUiComponents = resolve(
  __dirname,
  '../tailwind.config.js'
);
