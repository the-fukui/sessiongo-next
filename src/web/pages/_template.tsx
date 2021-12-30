import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

type ContainerProps = InferGetStaticPropsType<typeof getStaticProps>
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({}) => <div></div>

const useContainer = (props: ContainerProps) => {
  /** Logic here */

  const presenterProps = {}
  return { ...props, ...presenterProps }
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
    revalidate: 60,
  }
}

export default function Template(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
