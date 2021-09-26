import React, { createContext, useState, useReducer, useEffect } from 'react'
import { initializeApp, getApps, FirebaseApp } from 'firebase/app'

//firebase初期化
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'dammy',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'dammy',
  databeseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSEGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
}

interface State {
  app: FirebaseApp | null
}
const FirebaseContext = createContext<State>({
  app: null,
})

/**
 * Firebase初期化
 */
const initializeFirebase = () => {
  //firebaseが初期化されるときか
  let isInitial = getApps().length === 0
  let app = null
  if (isInitial) {
    app = initializeApp(firebaseConfig)
  }

  return { app }
}

const FirebaseContextProvider: React.FC = ({ children }) => {
  const [app, setApp] = useState<FirebaseApp | null>(null)

  useEffect(() => {
    const { app: _app } = initializeFirebase()
    setApp(_app)
  }, [])

  return (
    <FirebaseContext.Provider value={{ app }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseContextProvider }

export default FirebaseContext
