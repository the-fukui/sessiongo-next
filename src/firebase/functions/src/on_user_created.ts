import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import dotenvFlow from 'dotenv-flow'
import { client } from '@shared/modules/graphql-request'
import { getSdk } from '@shared/gql/CreateUser.generated'

dotenvFlow.config()

admin.initializeApp({
  projectId: process.env.FIREBASE_PROJECT_ID,
})

export const setCustomClaims = functions.auth.user().onCreate(async (user) => {
  console.log('new user registered')
  try {
    if (!user.email) throw new Error('no email')

    // DBへのユーザーデータの作成リクエスト
    const sdk = getSdk(client)

    const { createUsers } = await sdk.CreateUsersMutation({
      createUsersData: { email: user.email },
    })

    // // カスタムクレームの設定
    await admin
      .auth()
      .setCustomUserClaims(user.uid, { db_user_id: createUsers.id })
  } catch (e) {
    console.log(e)
  }
})
