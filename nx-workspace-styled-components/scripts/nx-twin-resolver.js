const withNXTwinPreset = require('./nx-twin-preset-resolver.js');

const projectName = process.argv[3].split(':')[0];

const tailwindConfig = withNXTwinPreset(projectName);

module.exports = tailwindConfig;
