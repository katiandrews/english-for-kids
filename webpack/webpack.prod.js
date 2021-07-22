const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new ESLintPlugin({ extensions: ['tsx', 'ts', 'js'] }),
  ]
}
