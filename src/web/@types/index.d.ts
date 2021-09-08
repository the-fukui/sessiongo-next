declare var __NEXT_DATA__: any

type NextApiRequest = import('next').NextApiRequest
type NextApiResponse = import('next').NextApiResponse

interface NextApiRequestWithParams<T extends NextApiRequest['query']>
  extends NextApiRequest {
  query: T
}

type NextApiHandlerWithParams<K extends NextApiRequest['query'], T = any> = (
  req: NextApiRequestWithParams<K>,
  res: NextApiResponse<T>,
) => void | Promise<void>
