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
    const { client } = useContext(GraphqlContext)
    const { user } = useContext(AuthContext)

    const [profile, setProfile] = useState<GetProfileQuery['users_by_pk']>()

    useEffect(() => {
      if (!client || !user) return
      ;(async () => {
        setTimeout(async () => {
          try {
            const sdk = getSdk(client)
            console.log('request')

            const { users_by_pk: profile } = await sdk.GetProfile({
              auth_id: user.uid,
            })
          } catch (e) {
            console.log(e)
          }
        }, 1000)
        // setProfile(profile)
      })()
    }, [client, user])

    return (
      <div>
        <h1>{profile?.name}</h1>
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
