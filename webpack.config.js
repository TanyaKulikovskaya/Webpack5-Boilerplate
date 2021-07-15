const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
        { test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i, type: 'asset' },
        { test: /\.(scss|css)$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
      ],
  }
}
