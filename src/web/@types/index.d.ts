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

//InferGetStaticPropsなどでnotFoundが返されていると型がneverになる問題
// https://github.com/vercel/next.js/issues/15913
type GetSSRResult<TProps> =
  //
  { props: TProps } | { redirect: any } | { notFound: true }

type GetSSRFn<TProps extends any> = (args: any) => Promise<GetSSRResult<TProps>>

type inferSSRProps<TFn extends GetSSRFn<any>> = TFn extends GetSSRFn<
  infer TProps
>
  ? NonNullable<TProps>
  : never

type unixTime = number
