const fs = require('fs');
const path = require('path');
const findNxRoot = require('./nx-find-root');

const withNXTwinPreset = (projectName) => {
  const rootPath = findNxRoot();
  const rawdataWorkspace = fs.readFileSync(
    path.resolve(rootPath, 'workspace.json')
  );
  const workspace = JSON.parse(rawdataWorkspace);

  const project = workspace.projects[projectName];

  if (!project) {
    throw new Error('PROJECT NOT FOUND');
  }

  const tailwindCongigPath = path.resolve(
    rootPath,
    project.root,
    'tailwind.config.js'
  );

  const tailwindConfig = require(tailwindCongigPath);

  return tailwindConfig;
};

module.exports = withNXTwinPreset;
