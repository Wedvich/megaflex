/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config();

const path = require('path');
const fs = require('fs');
const HtmlPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProduction = process.env.NODE_ENV === 'production';

const entry = ['./src/index.tsx'];
if (!isProduction) {
  entry.unshift('react-hot-loader/patch');
}

const plugins = [
  new HtmlPlugin({
    template: './src/index.html',
  }),
  new WebpackBar(),
];

if (isProduction) {
  plugins.push(new MiniCssExtractPlugin());
}

if (process.env.ANALYZE) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
      generateStatsFile: true,
      reportFilename: path.resolve(__dirname, 'analysis/report.html'),
      statsFilename: path.resolve(__dirname, 'analysis/stats.json'),
    }),
  );
}

const stats = {
  children: false,
  modules: false,
};

const config = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  entry,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-dom': !isProduction ? '@hot-loader/react-dom' : 'react-dom',
    },
  },
  plugins,
  stats,
};

if (!isProduction) {
  config.devServer = {
    compress: isProduction,
    historyApiFallback: true,
    hot: !isProduction,
    http2: true,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt')),
    },
    open: true,
    stats,
  };
}

module.exports = config;
