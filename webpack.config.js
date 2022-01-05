const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      { test: /\.js$|jsx/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.css$|\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new Webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(path.resolve(__dirname, 'public'))
    })
  ]
}