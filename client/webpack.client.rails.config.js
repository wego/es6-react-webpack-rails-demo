const config = require('./webpack.config');
const webpack = require('webpack');

config.entry = ['./clientGlobal.js', 'react-dom', 'react'];

config.output = {
  path: '../app/assets/javascripts/generated',
  filename: 'client-bundle.js',
};

config.plugins.push(
  new webpack.optimize.DedupePlugin()
);

module.exports = config;
