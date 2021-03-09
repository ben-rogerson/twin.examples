const withNXTwinPreset = require('../../scripts/nx-twin-preset-resolver');

module.exports = {
  presets: [withNXTwinPreset('ui')],
};
