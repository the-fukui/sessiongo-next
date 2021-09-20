import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import dotenvFlow from 'dotenv-flow'
import { client } from '@shared/modules/graphql-request'
import { getSdk } from '@shared/gql/CreateUser.generated'

dotenvFlow.config()

admin.initializeApp({
  projectId: process.env.FIREBASE_PROJECT_ID,
})

export const createUser = functions.auth.user().onCreate(async (user) => {
  try {
    // DBへのユーザーデータの作成リクエスト
    const sdk = getSdk(client)

    await sdk.CreateUsersMutation({ auth_id: user.uid })

    console.log('new user registered')

    // // // カスタムクレームの設定
    // await admin
    //   .auth()
    //   .setCustomUserClaims(user.uid, { db_user_id: createUsers.id })
  } catch (e) {
    console.log(e)
  }
})
