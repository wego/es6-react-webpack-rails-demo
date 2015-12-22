const config = require('./webpack.config');
const webpack = require('webpack');

config.entry = ['./serverGlobal.js', 'react-dom/server', 'react'];

config.output = {
  path: '../app/assets/javascripts/generated',
  filename: 'server-bundle.js',
};

config.plugins.push(
  new webpack.optimize.DedupePlugin()
);

module.exports = config;
