const fs = require('fs');
const path = require('path');

const findNxRoot = () => {
  let isExist = false;
  let relativePath = '';

  while (!isExist) {
    const isWorkspace = fs.existsSync(relativePath + 'workspace.json');

    if (!isWorkspace) {
      relativePath = `../${relativePath}`;
    }

    isExist = isWorkspace;
  }

  const root = path.resolve(process.cwd(), relativePath);

  return root;
};

module.exports = findNxRoot;
