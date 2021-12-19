// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import admin from 'firebase-admin'

type Query = {}

type Body = {}

const API: NextApiHandlerWithParams<Query, Body, null> = (req, res) => {
  res.status(404).end()
}

export default API
