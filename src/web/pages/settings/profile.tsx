import type {
  NextPage,
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import GraphqlContext from '@web/contexts/GraphqlContext'
import AuthContext from '@web/contexts/AuthContext'
import { getSdk, GetProfileQuery } from '@shared/gql/GetProfile.generated'

const SettingsProfile: NextPage<inferSSRProps<typeof getStaticProps>> =
  ({}) => {
    const { client, isTokenSet } = useContext(GraphqlContext)
    const { user } = useContext(AuthContext)

    const [profile, setProfile] = useState<GetProfileQuery['users_by_pk']>()

    /**
     * ユーザー情報を取得
     */
    useEffect(() => {
      //graphql clientにtokenのセットを矯正する
      if (!client || !user || !isTokenSet) return
      ;(async () => {
        try {
          const sdk = getSdk(client)
          console.log('request')

          const { users_by_pk: profile } = await sdk.GetProfile({
            auth_id: user.uid,
          })

          setProfile(profile)
        } catch (e) {
          console.log(e)
        }
      })()
    }, [client, user, isTokenSet])

    if (!profile) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h1>{profile?.name}</h1>
        <p>{profile.user_name}</p>
      </div>
    )
  }

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: {},
    revalidate: 60,
  }
}

export default SettingsProfile
