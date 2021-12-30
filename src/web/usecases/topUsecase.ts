import { sessionRepository } from '@web/repositories/session'
import { RRule } from 'rrule'
import dayjs from 'dayjs'

/**
 * 繰り返しイベントもパースして含めた一覧を返す
 */
export const getSessionList = async () => {
  const month = dayjs().startOf('month').add(1, 'month')

  const [calendarItemList, calendarRecurringItemList] = await Promise.all([
    sessionRepository().calendarItemList(),
    sessionRepository().calendarRecurringItemList(),
  ])

  let sessionList = [...calendarItemList]

  calendarRecurringItemList.forEach((item) => {
    if (!item.rrule) return

    console.log('rule:', item.rrule)
    const dateList = RRule.fromString(item.rrule).all((d) =>
      dayjs(d).isBefore(month),
    )
    const recurrings = dateList.map((date) => {
      return {
        ...item,
        startAt: dayjs(date).unix(),
      }
    })

    sessionList = [...sessionList, ...recurrings]
  })

  return sessionList
}
