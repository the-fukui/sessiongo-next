import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useContext,
} from 'react'
import {
  getAuth,
  connectAuthEmulator,
  onAuthStateChanged,
  User,
  Auth,
} from 'firebase/auth'
import FirebaseContext from '@web/contexts/FirebaseContext'
import { FirebaseApp } from '@firebase/app'

interface State {
  user: User | null
  auth: Auth | null
  token: string | null
  isInitialLoading: boolean
}
const AuthContext = createContext<State>({
  user: null,
  auth: null,
  token: null,
  isInitialLoading: true,
})

/**
 * Auth初期化
 */
const initializeAuth = (app: FirebaseApp) => {
  //auth
  const auth = getAuth(app)
  //emulator
  if (process.env.NODE_ENV === 'development') {
    connectAuthEmulator(auth, 'http://localhost:9099')
  }

  return { auth }
}

const watchAuthState = (
  auth: Auth,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('loggedin:', { user })
      setUser(user)
    } else {
      console.log('not logged in')
      setUser(null)
    }

    setIsLoading(false)
  })
}

/**
 * 未署名のJWTトークンに署名して返す（Firebase emulator用）
 * @param token JWTトークン
 * @returns 署名済みJWTトークン
 */
const getLocallySignedToken = async (token: string) => {
  const jwt = await import('jsonwebtoken')
  const decoded = jwt.decode(token)
  return decoded
    ? jwt.sign(decoded, 'secretsecretsecretsecretsecretsecret')
    : token
}

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [token, setToken] = useState<string | null>(null)
  const [auth, setAuth] = useState<Auth | null>(null)
  const { app } = useContext(FirebaseContext)

  /**
   * Authの状態を監視
   */
  useEffect(() => {
    if (!app) return
    const { auth: _auth } = initializeAuth(app)
    setAuth(_auth)
    watchAuthState(_auth, setUser, setIsInitialLoading)
  }, [app])

  /**
   * tokenの取得を監視
   */
  useEffect(() => {
    if (!user) return
    ;(async () => {
      let token = await user.getIdToken()

      //ローカル開発時のみトークンに署名する
      if (location.hostname === 'localhost' && token) {
        token = await getLocallySignedToken(token)
      }

      console.log({ token })

      setToken(token)
    })()
  }, [user])

  return (
    <AuthContext.Provider value={{ user, auth, token, isInitialLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider }

export default AuthContext
