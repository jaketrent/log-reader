const {
  graphql,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = require('graphql')
const { GraphQLError } = require('graphql/error')
const { GraphQLScalarType } = require('graphql/type')
const { Kind } = require('graphql/language')
const graphqlHTTP = require('koa-graphql')
const koa = require('koa')
const mount = require('koa-mount')

const logsRepo = require('../logs/repo')

const app = koa()

const payloadType = new GraphQLScalarType({
  name: 'payload',
  serialize: value => value,
  parseValue: value => value,
  parseLiteral: ast => {
    if (ast.kind !== Kind.OBJECT)
      throw new GraphQLError("Query error: Can only parse object but got a: " + ast.kind, [ast])
    return ast.value
  }
})

const logType = new GraphQLObjectType({
  name: 'logs',
  fields: {
    created: { type: GraphQLString },
    id: { type: GraphQLID },
    message: { type: GraphQLString },
    payload: { type: payloadType }
  }
})

const logQueryFieldConfig = {
  logs: {
    type: new GraphQLList(logType),
    args: {
      message: { type: GraphQLString },
      payload: { type: payloadType }
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
