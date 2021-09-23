import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import dotenvFlow from 'dotenv-flow'
import { client } from '@shared/modules/graphql-request'
import { getSdk as getCreateUserSdk } from '@shared/gql/CreateUser.generated'
import { getSdk as getDeleteUserSdk } from '@shared/gql/DeleteUser.generated'

dotenvFlow.config()

admin.initializeApp({
  projectId: process.env.FIREBASE_PROJECT_ID,
})

export const onUserCreated = functions.auth.user().onCreate(async (user) => {
  try {
    await createUser(user.uid)
    await createRefreshToken(user.uid)

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
    const sdk = getCreateUserSdk(client)
    sdk
      .CreateUsersMutation({ auth_id: uid })
      .then(() => {
        console.log('new user registered')
        resolve()
      })
      .catch((e) => reject(e))
  })

/**
 * DBにユーザー作成できたかどうかをフロントエンドにfirestore経由で通知させるためにrefresh tokenを保存
 * @param uid ユーザーID(Firebase Authentication)
 */
const createRefreshToken = async (uid: string): Promise<void> =>
  new Promise((resolve, reject) => {
    admin
      .firestore()
      .collection('user_meta')
      .doc(uid)
      .create({
        refreshTime: admin.firestore.FieldValue.serverTimestamp(),
        isRegistrationFailed: false,
      })
      .then(() => {
        console.log('refresh token has been saved')
        resolve()
      })
      .catch((e) => reject(e))
  })

/**
 * ユーザー作成に失敗した時点でFirebase Authenticationからも削除する
 * Firestoreにも失敗フラグをたてる
 * DBからも削除する
 * @param error Error内容
 * @param uid 失敗したユーザーID
 */
const onError = (error: unknown, uid: string) => {
  console.error(
    `error occured while creating user, user ${uid} has been deleted. `,
    error,
  )

  //firebase authenticationからユーザー削除
  admin
    .auth()
    .deleteUser(uid)
    .catch((e) => {
      console.error(
        `error occured while creating user in DB, tried to delete user ${uid} but failed.`,
        error,
      )
    })

  //DBからユーザー削除
  const sdk = getDeleteUserSdk(client)
  sdk
    .DeleteUsersMutation({ auth_id: uid })
    .catch((e) =>
      console.error(`error occured while deleting user from DB`, error),
    )

  //firestoreに失敗フラグ
  admin
    .firestore()
    .collection('user_meta')
    .doc(uid)
    .create({
      refreshTime: null,
      isRegistrationFailed: true,
    })
    .catch((e) =>
      console.error(
        `error occured while creating failed flag in firestore`,
        error,
      ),
    )
}
