const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const federationConfig = {
  name: 'jayapod',
  filename: 'remoteEntry.js',
  shared: {
    '@emotion/react': {
      singleton: true,
      strictVersion: true,
      version: '11.14.0',
      requiredVersion: '11.14.0',
    },
    // '@emotion/styled': { singleton: true },
    '@mui/material': {
      singleton: true,
      strictVersion: true,
      version: '7.3.1',
      requiredVersion: '7.3.1',
    },
    '@mui/system': {
      singleton: true,
      strictVersion: true,
      version: '7.3.1',
      requiredVersion: '7.3.1',
    },
    '@mui/x-date-pickers': {
      singleton: true,
      strictVersion: true,
      version: '8.10.0',
      requiredVersion: '8.10.0',
    },
    axios: {
      singleton: true,
      strictVersion: true,
      version: '1.11.0',
      requiredVersion: '1.11.0',
    },
    'date-fns': {
      singleton: true,
      strictVersion: true,
      version: '4.1.0',
      requiredVersion: '4.1.0',
    },
    'js-logger': {
      singleton: true,
      strictVersion: true,
      version: '1.6.1',
      requiredVersion: '1.6.1',
    },
    react: {
      singleton: true,
      strictVersion: true,
      version: '19.1.1',
      requiredVersion: '19.1.1',
    },
    'react-dom': {
      singleton: true,
      strictVersion: true,
      version: '19.1.1',
      requiredVersion: '19.1.1',
    },
    'react-router-dom': {
      singleton: true,
      strictVersion: true,
      version: '7.8.0',
      requiredVersion: '7.8.0',
    },
    'react-youtube': {
      singleton: true,
      strictVersion: true,
      version: '10.1.0',
      requiredVersion: '10.1.0',
    },
  },
  exposes: {
    './DateUtils': path.resolve(__dirname, 'src/utils.ts'),
    './Apod': path.resolve(__dirname, 'src/components/apod/index.tsx'),
    './CommandsProvider': path.resolve(__dirname, 'src/providers/commands.tsx'),
    './ApodModule': path.resolve(__dirname, 'src/modules/apod.tsx'),
  },
};

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'apod-[name].js',
    publicPath: 'https://apod.jrgee.com/',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    port: 9003,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'apod',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
      safe: true,
      defaults: true,
    }),
    new ModuleFederationPlugin({
      ...federationConfig,
    }),
    new FederatedTypesPlugin({
      federationConfig,
    }),
  ],
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = config;
