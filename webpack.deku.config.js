
const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

config.entry.deku = './src/deku.js'

config.plugins = [
  new webpack.ProvidePlugin({
    h: path.resolve('./src/deku-create-element')
  })
]

module.exports = config

