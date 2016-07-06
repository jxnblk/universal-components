
const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

config.entry.react = './src/react.js'

config.plugins = [
  new webpack.ProvidePlugin({
    h: path.resolve('./src/react-create-element')
  })
]

module.exports = config

