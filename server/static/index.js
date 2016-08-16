const koa = require('koa')
const webpackDevMiddleware = require('koa-webpack-dev-middleware')
const webpackHotMiddleware = require('koa-webpack-hot-middleware')
const webpack = require('webpack')

const config = require('./webpack.config.babel')

const app = koa()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, stats: { colors: true } }))
app.use(webpackHotMiddleware(compiler, { log: () => {} }))

module.exports = app
