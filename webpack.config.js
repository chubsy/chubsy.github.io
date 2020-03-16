const webpack = require('webpack');
const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ghpages = require('gh-pages');
//
// ghpages.publish('dist', function(err) {});

const dist = path.join(__dirname, "dist");

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },
  entry: './src/index.jsx',
  output: {
    path: dist,
    filename: '[name].js',
    publicPath: 'dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test : /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CopyWebpackPlugin([{from: './public/main.js'}])
  ]
}
