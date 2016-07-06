
const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

config.entry.bel = './src/bel.js'

config.plugins = [
  new webpack.ProvidePlugin({
    h: path.resolve('./src/bel-create-element')
  })
]

module.exports = config

