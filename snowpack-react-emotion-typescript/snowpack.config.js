/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: '@snowpack/app-scripts-react',
  packageOptions: {
    knownEntrypoints: ['@emotion/react', '@emotion/styled'],
  },
}
