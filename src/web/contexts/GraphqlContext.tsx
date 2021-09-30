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
  isTokenSet: Boolean
}
const GraphqlContext = createContext<State>({
  client: null,
  isTokenSet: false,
})

/**
 * GraphqlRequestクライアントの作成
 */
const createGraphqlRequest = (token: string | null) => {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || ''
  const option = {
    headers: {},
  }

  if (token) console.log(token)
  option.headers = {
    Authorization: `Bearer ${token}`,
  }

  const client = new GraphQLClient(endpoint, option)

  return { client }
}

const GraphqlContextProvider: React.FC = ({ children }) => {
  const [client, setClient] = useState<GraphQLClient | null>(null)
  const [isTokenSet, setIsTokenSet] = useState(false)
  const { user, token } = useContext(AuthContext)

  useEffect(() => {
    ;(async () => {
      const { client: _client } = createGraphqlRequest(token)
      if (token) setIsTokenSet(true)
      setClient(_client)
    })()
  }, [token])

  return (
    <GraphqlContext.Provider value={{ client, isTokenSet }}>
      {children}
    </GraphqlContext.Provider>
  )
}

export { GraphqlContextProvider }

export default GraphqlContext
