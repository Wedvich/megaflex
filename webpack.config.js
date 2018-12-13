const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

require('dotenv').config();

module.exports = () => ({
  mode: process.env.NODE_ENV,
  devtool: 'cheap-module-source-map',
  entry: path.resolve(__dirname, 'src/index'),
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: {
                esmodules: true
              }
            }],
            '@babel/preset-react'
          ],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new ScriptExtHtmlWebpackPlugin({
      module: /main\.js$/
    })
  ],
  devServer: {
    hot: true,
    open: true,
    compress: true,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt'))
    },
    historyApiFallback: true
  }
});
