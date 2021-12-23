import Firebase from '@web/infrastructure/firebase.server'
import { Session } from '@shared/@types/firestore'

export const getAllSessions = async () => {
  try {
    const snapshot = await Firebase.db.collection('master/v1/sessions').get()

    return snapshot.docs.map((doc) => {
      const session = doc.data() as Session

      return {
        id: doc.id,
        ...session,
      }
    })
  } catch (e) {
    console.log(e)

    return []
  }
}
