import React, {
  useEffect,
  useRef,
  useContext,
  useState,
  useCallback,
} from 'react'
import style from './index.module.scss'
import AuthContext from '@web/contexts/AuthContext'
import type { auth } from 'firebaseui'

import {
  EmailAuthProvider,
  GoogleAuthProvider,
  AdditionalUserInfo,
  deleteUser,
  User,
} from 'firebase/auth'

interface Props {
  className?: string
}

const Login: React.VFC<Props> = ({ className = '' }) => {
  const { auth } = useContext(AuthContext)
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
    const additionalUserInfo: AdditionalUserInfo = authResult.additionalUserInfo
    const user: User = authResult.user

    if (additionalUserInfo.isNewUser) {
      //新規ユーザーの場合、DBにもユーザー情報を作成する
      ;(async () => {
        try {
          const jwt = await user.getIdToken(true)
          const auth_id = user.uid
          await createUser(auth_id, jwt)
          alert('new user login succeed!')
        } catch (e) {
          //エラーでDBにユーザーを作れていないので、Authサービスからも削除する
          await deleteUser(user)
          alert('login failed...')
        }
      })()
    } else {
      alert('welcome back!')
    }
    return false
  }

  /**
   * ログイン失敗時
   * @param error エラー内容
   */
  const signInFailure = (error: auth.AuthUIError) => {
    alert('login failed')
  }

  /**
   * auth_id（AuthサービスのID）とJWTを突合させて本人であればDBにユーザーを作成する
   */
  const createUser = async (auth_id: string, jwt: string) => {
    if (!auth_id || !jwt) throw new Error("couldn't get ID or token")

    await fetch('/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        auth_id,
        jwt,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
      })
      .catch((e) => {
        throw e
      })
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
