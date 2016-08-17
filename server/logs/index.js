const koa = require('koa')
const route = require('koa-route')

const repo = require('./repo')

const app = koa()

function* list() {
  const logs = yield repo.query(this.request.body.data)
  this.body = {
    data: logs
  }
}

app.use(route.post('/', list))

module.exports = app
