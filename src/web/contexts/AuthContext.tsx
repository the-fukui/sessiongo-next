import React, { createContext, useState, useReducer, useEffect } from 'react'
import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  connectAuthEmulator,
  onAuthStateChanged,
  User,
  Auth,
} from 'firebase/auth'

//firebase初期化
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'dammy',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  databeseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSEGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
}

interface State {
  user: User | null
  auth: Auth | null
}
const AuthContext = createContext<State>({
  user: null,
  auth: null,
})

/**
 * Firebase初期化
 */
const initializeFirebase = () => {
  //firebaseが初期化されるときか
  let isInitial = getApps().length === 0
  let app
  if (isInitial) {
    app = initializeApp(firebaseConfig)
  }

  //auth
  const auth = getAuth(app)
  //emulator
  if (process.env.NODE_ENV === 'development' && isInitial) {
    connectAuthEmulator(auth, 'http://localhost:9099')
  }

  return { auth }
}

const watchAuthState = (
  auth: Auth,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('loggedin:', { user })
      setUser(user)
    } else {
      console.log('not logged in')
      setUser(null)
    }
  })
}

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [auth, setAuth] = useState<Auth | null>(null)

  useEffect(() => {
    const { auth: _auth } = initializeFirebase()
    setAuth(_auth)
    watchAuthState(_auth, setUser)
  }, [])

  return (
    <AuthContext.Provider value={{ user: user, auth: auth }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider }

export default AuthContext
