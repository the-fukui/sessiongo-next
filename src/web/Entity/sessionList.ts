import { RRule } from 'rrule'
import { Session } from '@shared/@types/firestore'

// interface SessionListItem {
//   title: string
//   rrule: string
// }

const sessionListEntity = (sessionList: Session[]) => {
  let allDates: Date[] = []

  const getAllDates = () => {
    if (allDates.length > 0) return allDates

    sessionList.forEach((session) => {
      if (session.rrule) {
        const rule = RRule.fromString(session.rrule)
        allDates.concat(rule.all())
      }
    })

    return allDates
  }

  return {
    getAllDates,
  }
}

export default sessionListEntity
