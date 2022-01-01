import { sessionRepository } from '@web/repositories/session'
import { RRule } from 'rrule'
import dayjs from 'dayjs'
import { autoId } from '@google-cloud/firestore/build/src/util'

/**
 * 繰り返しイベントもパースして含めた一覧を返す
 */
export const getSessionList = async () => {
  const month = dayjs().startOf('month').add(1, 'month')

  //ワンショットイベントと繰り返しイベントを取得
  const [calendarItemList, calendarRecurringItemList] = await Promise.all([
    sessionRepository().calendarItemList(),
    sessionRepository().calendarRecurringItemList(),
  ])

  let sessionList = [
    ...calendarItemList.map((item) => ({
      ...item,
      isRecurring: false,
      originalId: item.id,
    })),
  ]

  //繰り返しイベントの当月の日付一覧を取得してワンショットのリストにマージ
  calendarRecurringItemList.forEach((item) => {
    if (!item.rrule) return

    console.log('rule:', item.rrule)
    const dateList = RRule.fromString(item.rrule).all((d) =>
      dayjs(d).isBefore(month),
    )
    const recurrings = dateList.map((date) => {
      const { rrule, rruleEndAt, ..._item } = item

      return {
        ..._item,
        id: autoId(),
        originalId: item.id,
        startAt: dayjs(date).unix(),
        isRecurring: true,
      } as typeof sessionList[0]
    })

    sessionList = [...sessionList, ...recurrings]
  })

  return sessionList
}
