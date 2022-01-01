import Firebase from '@web/infrastructure/firebase.server'
import {
  SessionCalendarItem,
  SessionCalendarRecurringItem,
} from '@shared/@types/firestore'

//TODO: ここはユニバーサル仕様にする
export const sessionRepository = () => {
  /**
   * カレンダー用イベント一覧（ワンショットイベント）
   */
  const calendarItemList = async () => {
    try {
      //TODO: プラマイ1日でとる（タイムゾーン）
      const snapshot = await Firebase.db
        .collection('sessionCalendarItem/v1/items/')
        .get()

      return snapshot.docs.map((doc) => {
        const session = doc.data() as SessionCalendarItem

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

  /**
   * カレンダー用繰り返しイベントインスタンス一覧
   */
  const calendarRecurringItemList = async () => {
    try {
      //TODO: プラマイ1日でとる（タイムゾーン）
      const snapshot = await Firebase.db
        .collection('sessionCalendarRecurringItem/v1/items/')
        .get()

      return snapshot.docs.map((doc) => {
        const session = doc.data() as SessionCalendarRecurringItem

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

  return {
    calendarItemList,
    calendarRecurringItemList,
  }
}
