import dotenvFlow from 'dotenv-flow'
import { GraphQLClient } from 'graphql-request'
dotenvFlow.config()

const endpoint = process.env.GRAPHQL_ENDPOINT || ''
const option = {
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET || '',
  },
}

export const client = new GraphQLClient(endpoint, option)
