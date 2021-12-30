import { sessionRepository } from '@web/repositories/session'

export const getSessionList = async () => {
  const sessionList = await sessionRepository().list()

  return sessionList
}
