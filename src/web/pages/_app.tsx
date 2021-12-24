import 'destyle.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppContext, AppProps } from 'next/app'

import DefaultLayout from '@web/components/Layouts/Default'
import { AuthContextProvider } from '@web/contexts/AuthContext'
import { FirebaseContextProvider } from '@web/contexts/FirebaseContext'

interface InitialProps {}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps &
  InitialProps & {
    Component: NextPageWithLayout
  }

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  //pageコンポーネント内でLayoutの指定があればそちらを使用する
  const getLayout = Component.getLayout
    ? (page: ReactElement) => page
    : (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>

  return (
    <FirebaseContextProvider>
      <AuthContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </AuthContextProvider>
    </FirebaseContextProvider>
  )
}

export default MyApp
