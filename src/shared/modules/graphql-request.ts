import dotenvFlow from 'dotenv-flow'
import { GraphQLClient } from 'graphql-request'
dotenvFlow.config()

const endpoint = process.env.GRAPHQL_ENDPOINT || ''
const option = {
  headers: {
    'x-api-key': process.env.API_KEY || '',
  },
}

export const client = new GraphQLClient(endpoint, option)
