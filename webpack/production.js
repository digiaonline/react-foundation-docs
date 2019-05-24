var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, {
  plugins: [
    new webpack.DefinePlugin(Object.assign({}, {
      'process.env.NODE_ENV': '"production"'
    })),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/main.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
  ]
}, require('./config'));
