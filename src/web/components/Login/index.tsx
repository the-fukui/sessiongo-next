import React, { useEffect, useRef, useContext, useState } from 'react'
import style from './index.module.scss'
import AuthContext from '@web/contexts/AuthContext'
import type { auth } from 'firebaseui'

import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'

interface Props {
  className?: string
}

const Login: React.VFC<Props> = ({ className = '' }) => {
  const { user, auth } = useContext(AuthContext)
  const [isInitialized, setIsInitialized] = useState<Boolean>(false)

  const loadFirebaseUI = async () => {
    console.log('load firebaseui')
    const firebaseui = await import('firebaseui')
    const ui = new firebaseui.auth.AuthUI(auth)
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        {
          provider: EmailAuthProvider.PROVIDER_ID,
        },
        {
          provider: GoogleAuthProvider.PROVIDER_ID,
          // scopes: ['https://www.googleapis.com/auth/user.emails.read'],
        },
      ],
      tosUrl: 'https://example.com',
      privacyPolicyUrl: 'https://example.com',
      callbacks: {
        signInSuccessWithAuthResult,
        signInFailure,
      },
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    })
  }

  /**
   * ログイン成功時
   * @param authResult 認証結果
   * @param redirectUrl リダイレクト先URL
   * @returns
   */
  const signInSuccessWithAuthResult = (
    authResult: any,
    redirectUrl?: string | undefined,
  ) => {
    alert('login succeed!')
    return false
  }

  /**
   * ログイン失敗時
   * @param error エラー内容
   */
  const signInFailure = (error: auth.AuthUIError) => {
    alert('login failed')
  }

  useEffect(() => {
    if (!auth || isInitialized) return

    //TODO: firebaseui-jaを使いたい（現在はバグ解消まち）
    loadFirebaseUI()
    setIsInitialized(true)
  }, [auth, isInitialized])

  return (
    <div className={style.firebase_ui}>
      <div className={`${className}`} id="firebaseui-auth-container" />
    </div>
  )
}

export default Login
