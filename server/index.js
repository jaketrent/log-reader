require('dotenv').config()

const bodyParser = require('koa-bodyparser')
const debug = require('debug')('mm')
const fs = require('fs')
const logger = require('koa-logger')
const koa = require('koa')
const mount = require('koa-mount')
const route = require('koa-route')

const db = require('./db')
const graphql = require('./graphql')
const static = require('./static')
// const trans = require('./trans')

const app = koa()
const port = process.env.PORT || 3000

app.use(logger())
app.use(mount('/static', static))
app.use(bodyParser())
app.use(mount('/api/v1/graphql', graphql))
// app.use(mount('/api/v1/transactions', trans))
app.use(route.get('/', index))

function* index() {
  this.body = fs.readFileSync('./client/index.html', 'utf8')
}

db.connect((_, db) => {
  app.context.db = db
  app.listen(port)
  console.log(`Listening on port ${port}...`)
})
