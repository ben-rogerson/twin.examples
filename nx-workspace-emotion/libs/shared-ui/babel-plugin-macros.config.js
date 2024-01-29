/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

module.exports = {
  twin: {
    preset: 'emotion',
    config: resolve(__dirname, 'tailwind.config.js'),
  },
};
