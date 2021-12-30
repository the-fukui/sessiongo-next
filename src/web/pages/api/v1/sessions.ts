// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSessionList } from '@web/usecases/topUsecase'

type Query = {}

type Body = {}

export type Sessions = Awaited<ReturnType<typeof getSessionList>>

const Sessions: NextApiHandlerWithParams<Query, Body> = async (req, res) => {
  try {
    const sessionList = await getSessionList()

    return res.status(200).json(sessionList)
  } catch (e) {
    console.log(e)
    return res.status(500).end()
  }
}

export default Sessions
