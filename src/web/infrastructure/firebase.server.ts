import { App, initializeApp, getApps, getApp } from 'firebase-admin/app'
import { getFirestore, Firestore } from 'firebase-admin/firestore'

/**
 * 初期化済みのシングルトンなFirebaseクラス
 */
class Firebase {
  public db: Firestore

  constructor() {
    console.log('initialize firebase')
    const app =
      getApps().length === 0
        ? initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID })
        : getApp()
    this.db = getFirestore(app)
  }
}

export default new Firebase()
