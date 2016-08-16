const {
  graphql,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = require('graphql')
const graphqlHTTP = require('koa-graphql')
const koa = require('koa')
const mount = require('koa-mount')

const logsRepo = require('../logs/repo')

const app = koa()

const logType = new GraphQLObjectType({
  name: 'logs',
  fields: {
    message: { type: GraphQLString }
  }
})

const logQueryFieldConfig = {
  logs: {
    type: new GraphQLList(logType),
    args: {
      message: { type: GraphQLString }
    },
    resolve(_, args) {
      return logsRepo.query(args)
    }
  }
}

const rootQueryType = new GraphQLObjectType({
  name: 'rootQuery',
  fields: Object.assign({},
    logQueryFieldConfig
  )
})

const schema = new GraphQLSchema({
  query: rootQueryType
})

app.use(mount('/', graphqlHTTP({
  schema,
  graphiql: true
})))

module.exports = app
