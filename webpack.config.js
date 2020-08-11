const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: "./dist/src/app.js",
  mode: "none",
  target: "node",
  externals: [ nodeExternals() ],
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/cers', to: 'src/cers' },
        { from: 'src/email-templates', to: 'src/email-templates' }
      ]
    })
  ]
};
