import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello GrapQL!',
  },
}

const startApolloServer = async () => {
  const app = express()
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()
  server.applyMiddleware({ app })

  app.listen({ port: 8081 }, () => {
    console.log(`🚀 Server ready at http://localhost:8081${server.graphqlPath}`)
  })
}

startApolloServer()
