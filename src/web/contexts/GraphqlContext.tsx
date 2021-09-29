import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useContext,
} from 'react'
import { GraphQLClient } from 'graphql-request'
import AuthContext from '@web/contexts/AuthContext'
import jwt from 'jsonwebtoken'

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

/**
 * 未署名のJWTトークンに署名して返す（Firebase emulator用）
 * @param token JWTトークン
 * @returns 署名済みJWTトークン
 */
const getLocallySignedToken = (token: string) => {
  const decoded = jwt.decode(token)
  return decoded
    ? jwt.sign(decoded, 'secretsecretsecretsecretsecretsecret')
    : token
}

const GraphqlContextProvider: React.FC = ({ children }) => {
  const [client, setClient] = useState<GraphQLClient | null>(null)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    ;(async () => {
      let token = user ? await user.getIdToken() : undefined

      //ローカル開発時のみトークンに署名する
      if (location.hostname === 'localhost' && token) {
        token = getLocallySignedToken(token)
      }

      const { client: _client } = createGraphqlRequest(token)
      setClient(_client)
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
