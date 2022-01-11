import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import FormSessionPost from '@web/components/FormSessionPost'
import { Container, Grid } from '@mui/material'
import { useContext } from 'react'
import { SessionPostContextProvider } from '@web/contexts/SessionPostContext'

type ContainerProps = InferGetStaticPropsType<typeof getStaticProps>
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({}) => (
  <SessionPostContextProvider>
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <FormSessionPost />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Container>
  </SessionPostContextProvider>
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
