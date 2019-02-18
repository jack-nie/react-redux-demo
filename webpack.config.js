var webpack = require('webpack');
var htmlWebPackPlugin = require('html-webpack-plugin');
var path = require('path');
var SRC_PATH = path.join(__dirname, 'src');
var TARGET_PATH = path.join(__dirname, 'assets');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    path.join(SRC_PATH, 'js', 'entry.js')
  ],
  output: {
    path: TARGET_PATH,
    filename: '[name].js',
    publicPath: ''
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.css$/, exclude: /node_modules/, use: "style-loader!css-loader"  },
      { test: /\.png$/, exclude: /node_modules/, use: "url-loader?limit=100000"  },
      { test: /\.jpg$/, exclude: /node_modules/, use: "file-loader"  },
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebPackPlugin({
      inject: true,
      template: 'src/index.html'
    })
  ]
};
