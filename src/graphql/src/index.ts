import 'reflect-metadata'
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import _schema from './schema'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const startApolloServer = async () => {
  const app = express()
  const schema = await _schema
  const server = new ApolloServer({ schema, context: () => ({ prisma }) })
  await server.start()
  server.applyMiddleware({ app })

  app.listen({ port: 8081 }, () => {
    console.log(`🚀 Server ready at http://localhost:8081${server.graphqlPath}`)
  })
}

startApolloServer()
