const path = require('path');
const webpack = require('webpack');

const settings = {
  entry: path.join(__dirname, 'client', 'src', 'index.js'),
  output: { path: path.join(__dirname, 'client', 'public'), filename: 'bundle.js' },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2016',
            'react',
          ],
        },
      },
    ],
  },
};

module.exports = settings;