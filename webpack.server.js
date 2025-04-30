const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server/server.js',
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
