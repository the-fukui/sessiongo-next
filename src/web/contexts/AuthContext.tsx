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
  isInitialLoading: boolean
}
const AuthContext = createContext<State>({
  user: null,
  auth: null,
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

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
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

  return (
    <AuthContext.Provider value={{ user, auth, isInitialLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider }

export default AuthContext
