
const path = require('path')

const config = {
  entry: {},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    resolve: {
      root: [
        path.resolve('./src'),
        path.resolve('./components'),
      ]
    },
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.md/, loader: 'html!highlight!markdown' }
    ]
  },
  devServer: {
    contentBase: 'dist'
  }
}

module.exports = config

