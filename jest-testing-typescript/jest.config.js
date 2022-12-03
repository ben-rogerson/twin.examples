const nextJest = require('next/jest')

// const babelConfigEmotion = {
//   presets: [
//     [
//       '@babel/preset-react',
//       { runtime: 'automatic', importSource: '@emotion/react' },
//     ],
//   ],
//   plugins: [
//     require.resolve('babel-plugin-macros'),
//     require.resolve('@emotion/babel-plugin'),
//   ],
// }

const babelConfigStyledComponents = {
  presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
  plugins: [
    'babel-plugin-macros',
    ['babel-plugin-styled-components', { ssr: true }],
  ],
}

/** @type {import('ts-jest').JestConfigWithTsJest} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': ['babel-jest', babelConfigStyledComponents],
  },
}

const createJestConfig = nextJest({ dir: './' })

module.exports = createJestConfig(customJestConfig)
