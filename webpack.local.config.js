var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var config = require('./webpack.base.config.js')

config.entry = [
    'webpack/hot/only-dev-server',
    './assets/index'
]

config.output.publicPath = 'http://localhost:8080/assets/bundles/'

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
])

config.module.loaders.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: [
        'react-hot-loader/webpack',
        'babel-loader',
    ],
})

config.devServer = {
    hot: true,
    contentBase: './assets',
    overlay: true,
    proxy: {
        '*': 'http://localhost:8000/',
    },
},

module.exports = config
