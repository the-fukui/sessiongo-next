import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useContext,
} from 'react'
import { GraphQLClient } from 'graphql-request'
import AuthContext from '@web/contexts/AuthContext'

interface State {
  client: GraphQLClient | null
}
const GraphqlContext = createContext<State>({
  client: null,
})

/**
 * GraphqlRequestクライアントの作成
 */
const createGraphqlRequest = (token?: string) => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || ''
  const option = {
    headers: {},
  }

  console.log('create graphql client', endpoint)
  if (token) console.log(token)
  option.headers = {
    Authorization: `Bearer ${token}`,
  }

  const client = new GraphQLClient(endpoint, option)

  return { client }
}

const GraphqlContextProvider: React.FC = ({ children }) => {
  const [client, setClient] = useState<GraphQLClient | null>(null)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    ;(async () => {
      const token = user ? await user.getIdToken() : undefined
      const { client: _client } = createGraphqlRequest(token)
      setClient(_client)

      const tokenres = user ? await user.getIdTokenResult() : null
      console.log(tokenres ? tokenres : null)
    })()
  }, [user])

  return (
    <GraphqlContext.Provider value={{ client }}>
      {children}
    </GraphqlContext.Provider>
  )
}

export { GraphqlContextProvider }

export default GraphqlContext
