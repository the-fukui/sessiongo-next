import type {
  NextPage,
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'

const User: NextPage<inferSSRProps<typeof getStaticProps>> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params || !params.user_name)
    return {
      notFound: true,
    } as const

  const userName = Array.isArray(params?.user_name)
    ? params?.user_name[0]
    : params?.user_name

  const { client } = await import('@shared/modules/graphql-request-admin')
  const { getSdk } = await import('@shared/gql/GetUser.generated')
  const sdk = getSdk(client)

  const { users } = await sdk.GetUser({ userName: userName || '' })

  if (users.length === 0)
    return {
      notFound: true,
    } as const

  return {
    props: {
      user: users[0],
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default User
