const path = require('path');
const { createRequire } = require('module');

require('@rushstack/eslint-patch/modern-module-resolution');

const reactScriptsDir = path.dirname(require.resolve('react-scripts/package.json'));
const craRequire = createRequire(`${reactScriptsDir}/`);

module.exports = {
  extends: [
    craRequire.resolve('eslint-config-react-app'),
    craRequire.resolve('eslint-config-react-app/jest'),
  ],
  rules: {
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
