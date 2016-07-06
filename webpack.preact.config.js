
const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

config.entry.preact = './src/preact.js'

config.plugins = [
  new webpack.ProvidePlugin({
    h: path.resolve('./src/preact-create-element')
  })
]

module.exports = config

