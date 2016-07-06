
const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

config.entry.hyperscript = './src/hyperscript.js'

config.plugins = [
  new webpack.ProvidePlugin({
    h: path.resolve('./src/hyperscript-create-element')
    // h: 'hyperscript'
  })
]

module.exports = config

