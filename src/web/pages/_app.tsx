import '../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppContext, AppProps } from 'next/app'

import Layout from '@web/components/Layout'
import { AuthContextProvider } from '@web/contexts/AuthContext'
import { FirebaseContextProvider } from '@web/contexts/FirebaseContext'
import { GraphqlContextProvider } from '@web/contexts/GraphqlContext'

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
    : (page: ReactElement) => <Layout>{page}</Layout>

  return (
    <FirebaseContextProvider>
      <AuthContextProvider>
        <GraphqlContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </GraphqlContextProvider>
      </AuthContextProvider>
    </FirebaseContextProvider>
  )
}

export default MyApp
