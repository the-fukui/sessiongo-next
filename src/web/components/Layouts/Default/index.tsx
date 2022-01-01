import React, { useEffect, useRef, useContext } from 'react'
import style from './index.module.scss'
import { useRouter } from 'next/router'
import AuthContext from '@web/contexts/AuthContext'
import Login from '@web/components/Login'

const privateRoutes = ['/settings/profile']

const LoadingPage: React.FC = () => {
  return <div>Loading private...</div>
}

const LoginPage: React.FC = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

const MainPage: React.FC = ({ children }) => {
  return <main>{children}</main>
}

const Layout: React.FC = ({ children }) => {
  const { isInitialLoading, user } = useContext(AuthContext)
  const router = useRouter()

  const isPrivateRoute = privateRoutes.includes(router.route)
  const isAuthenticated = Boolean(!isInitialLoading && user)
  const isAuthenticateFialed = Boolean(!isInitialLoading && !user)

  let main
  if ((isPrivateRoute && isAuthenticated) || !isPrivateRoute)
    main = <MainPage>{children}</MainPage>
  if (isPrivateRoute && isInitialLoading) main = <LoadingPage />
  if (isPrivateRoute && isAuthenticateFialed) main = <LoginPage />

  return <>{main}</>
}

export default Layout
