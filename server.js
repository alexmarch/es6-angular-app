/**
 * Webpack dev server config
 */
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const open = require('open');

var config = require("./webpack.config.js");

const PORT = 8080;
const HOST = 'localhost';

config.entry.app.unshift(
  `webpack-dev-server/client?http://${process.env.HOST || HOST}:${process.env.PORT || PORT}/`,
  `webpack/hot/only-dev-server`);

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  contentBase: '/',
  hot: false,
  inline: true,
  publicPath: '/',
  historyApiFallback: true,
  stats: { colors: true },
  open: true
});

server.listen(process.env.PORT || PORT, process.env.HOST || HOST, ()=>{
  const URL = `http://${process.env.HOST || HOST}:${process.env.PORT || PORT}/`;
  open(URL);
  console.info('Server listen on:', URL);
});