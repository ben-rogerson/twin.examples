/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: '@snowpack/app-scripts-react',
  packageOptions: {
    knownEntrypoints: ['styled-components'],
  },
  devOptions: {
    port: 3000 // Removes error: `[404] Not Found (/sw-esm.js)`
  }
}
