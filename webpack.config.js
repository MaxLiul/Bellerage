'use strict';

const path = require('path');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './home.js',
  output: {
    filename: 'build.js',
    library: 'home'
  },
  watch: true, // реагируем на изменения

  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  plugins: [
    new JavaScriptObfuscator ({
        rotateUnicodeArray: true
    }, ['excluded_bundle_name.js'])
  ],

  watchOptions: {
    aggregateTimeout: 100 // время ожидания после изменения
  }

};