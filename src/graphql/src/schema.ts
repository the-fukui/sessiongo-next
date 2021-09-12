import { resolvers } from './generated/type-graphql'
import { buildSchema } from 'type-graphql'
import path from 'path'
const schema = buildSchema({
  resolvers: resolvers,
  validate: false,
  emitSchemaFile: path.resolve(__dirname, './generated/schema.graphql'),
})

export default schema
