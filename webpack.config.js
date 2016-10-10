const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssImport = require('postcss-import');
const AngularInjectorPlugin = require('webpack-angular-injector-plugin');

module.exports = {
  entry: {
    app: [
        path.resolve(__dirname, "./app/app.js")
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.dev.js', '.prod.js', '.web.js', '.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/, 
        loaders: ['ng-annotate', 'jshint', 'babel'],
        exclude: /(node_modules|bower_components)/ 
      },
      {test: /\.scss$/, loader: 'style!css!postcss!sass'},
      {test: /\.css$/,  loader: 'style!css' },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(svg|png|jpe?g|gif)$/, loader: 'file'},
      {test: /css?family?/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  postcss: function () {
        return {
            plugins: [
                postcssImport({
                  addDependencyTo: webpack
                }),
                require('autoprefixer'), 
                require('precss'), 
                require('postcss-font-magician')({formats: 'woff2 woff'})
              ]
        };
  },
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, "./app/index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css", {allChunks: false}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
       $: "jquery/dist/jquery.min.js",
       jQuery: "jquery/dist/jquery.min.js",
       "window.jQuery": "jquery/dist/jquery.min.js",
       "window.$": "jquery/dist/jquery.min.js"
    }),
    new AngularInjectorPlugin({
      exclude: /node_modules/
    })
  ],
  debug: true
};