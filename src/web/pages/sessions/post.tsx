import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import FormSessionPost from '@web/components/FormSessionPost'
import { Container, Grid } from '@mui/material'

type ContainerProps = InferGetStaticPropsType<typeof getStaticProps>
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({}) => (
  <Container>
    <Grid container>
      <Grid item xs={6}>
        <FormSessionPost />
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  </Container>
)

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
