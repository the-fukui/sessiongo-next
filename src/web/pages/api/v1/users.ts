// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import admin from 'firebase-admin'
import { client } from '@shared/modules/graphql-request'
import { getSdk } from '@shared/gql/CreateUser.generated'

type Query = {}

type Body = {
  auth_id: string
  jwt: string
}

const users: NextApiHandlerWithParams<Query, Body, null> = (req, res) => {
  /**
   * POST method
   */
  const post = async () => {
    try {
      //firebase初期化
      if (admin.apps.length === 0) {
        admin.initializeApp({
          projectId: process.env.FIREBASE_PROJECT_ID || '',
        })
      }

      const { auth_id, jwt } = req.body

      //Authサーバーへ問い合わせてJWTトークンからIDなどをデコード
      const { user_id } = await admin.auth().verifyIdToken(jwt)

      if (user_id === auth_id) {
        //ユーザーの送信したIDとサーバー問い合わせ結果のIDが同一であれば本人である
        createUser(auth_id)
      } else {
        throw new Error('invalid auth_id')
      }

      res.status(200).json({ status: 'ok' })
    } catch (e) {
      console.log('[API error] create user: ', e)
      res.status(500).json({ status: 'ng' })
    }
  }

  /**
   * DBにユーザーを作成する
   * @param auth_id 認証サービスのID
   */
  const createUser = async (auth_id: string) => {
    try {
      const sdk = getSdk(client)
      await sdk.CreateUsersMutation({
        createUsersData: { auth_id },
      })
    } catch (e) {
      throw new Error('something wrong while creating user:' + e)
    }
  }

  if (req.method === 'POST') return post()

  res.status(404).end()
}

export default users
