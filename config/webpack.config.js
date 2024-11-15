const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'apod',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new Dotenv({
      path: path.resolve(
        __dirname,
        `../.env.${process.env.NODE_ENV || 'development'}.local`,
      ),
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = config;
