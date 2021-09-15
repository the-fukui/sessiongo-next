declare var __NEXT_DATA__: any

type NextApiRequest = import('next').NextApiRequest
type NextApiResponse = import('next').NextApiResponse

interface NextApiRequestWithParams<
  T extends NextApiRequest['query'],
  K extends Object,
> extends NextApiRequest {
  query: T
  body: K
}

type NextApiHandlerWithParams<
  K extends NextApiRequest['query'],
  T extends Object,
  P = any,
> = (
  req: NextApiRequestWithParams<K, T>,
  res: NextApiResponse<P>,
) => void | Promise<void>
