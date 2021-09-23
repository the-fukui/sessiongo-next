import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import dotenvFlow from 'dotenv-flow'
import { client } from '@shared/modules/graphql-request'
import { getSdk } from '@shared/gql/CreateUser.generated'

dotenvFlow.config()

admin.initializeApp({
  projectId: process.env.FIREBASE_PROJECT_ID,
})

export const onUserCreated = functions.auth.user().onCreate(async (user) => {
  try {
    await createUser(user.uid)
    console.error('new user registered')

    // // // カスタムクレームの設定
    // await admin
    //   .auth()
    //   .setCustomUserClaims(user.uid, { db_user_id: createUsers.id })
  } catch (e) {
    //ユーザー作成失敗
    onError(e, user.uid)
  }
})

/**
 * DBへのユーザーデータの作成リクエスト
 * @param uid ユーザーID(Firebase Authentication)
 */
const createUser = async (uid: string): Promise<void> =>
  new Promise((resolve, reject) => {
    //debug: reject(new Error(''))
    const sdk = getSdk(client)
    sdk
      .CreateUsersMutation({ auth_id: uid })
      .then(() => resolve())
      .catch((e) => reject(e))
  })

/**
 * ユーザー作成に失敗した時点でFirebase Authenticationからも削除する
 * @param error Error内容
 * @param uid 失敗したユーザーID
 */
const onError = (error: unknown, uid: string) => {
  admin
    .auth()
    .deleteUser(uid)
    .catch((e) => {
      console.error(
        `error occured while creating user in DB, tried to delete user ${uid} but failed.`,
        error,
      )
    })
  console.error(
    `error occured while creating user in DB, user ${uid} has been deleted. `,
    error,
  )
}
