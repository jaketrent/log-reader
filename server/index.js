require('dotenv').config()

const bodyParser = require('koa-bodyparser')
const debug = require('debug')('mm')
const fs = require('fs')
const logger = require('koa-logger')
const koa = require('koa')
const mount = require('koa-mount')
const route = require('koa-route')

const db = require('./db')
const static = require('./static')
const logs = require('./logs')

const app = koa()
const port = process.env.PORT || 3000

app.use(logger())
app.use(mount('/static', static))
app.use(bodyParser())
app.use(mount('/api/v1/logs', logs))
app.use(route.get('/', index))

function* index() {
  this.body = fs.readFileSync('./client/index.html', 'utf8')
}

db.connect((_, db) => {
  app.context.db = db
  app.listen(port)
  console.log(`Listening on port ${port}...`)
})
