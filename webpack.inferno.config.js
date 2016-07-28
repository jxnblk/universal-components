const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

config.entry.inferno = './src/inferno.js'

config.plugins = [
  new webpack.ProvidePlugin({
    h: path.resolve('./src/inferno-create-element')
  })
]

module.exports = config

