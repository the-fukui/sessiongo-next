import 'reflect-metadata'
import express from 'express'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import _schema from './schema'
import { PrismaClient } from '@prisma/client'
import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()
const prisma = new PrismaClient()

const startApolloServer = async () => {
  const app = express()
  const schema = await _schema
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      //GraphQL全体に認証かける
      const API_KEY = req.headers['x-api-key'] || ''
      if (API_KEY !== process.env.API_KEY)
        throw new AuthenticationError('you must be logged in')

      return { prisma }
    },
  })
  await server.start()
  server.applyMiddleware({ app })

  app.listen({ port: process.env.GRAPHQL_PORT }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${process.env.GRAPHQL_PORT}${server.graphqlPath}`,
    )
  })
}

startApolloServer()
