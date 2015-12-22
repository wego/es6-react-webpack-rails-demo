const config = require('./webpack.config');

config.entry = ['./clientGlobal.js', 'react-dom', 'react'];

config.output = {
  path: '../app/assets/javascripts/generated',
  filename: 'client-bundle.js',
};

module.exports = config;
