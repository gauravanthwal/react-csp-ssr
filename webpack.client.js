const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: '../../public/index.html',
      template: 'public/index.html',
      inject: false // We render server-side
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
