import React, { useEffect } from 'react'
import style from './index.module.scss'
import { Grid, Switch, FormControlLabel } from '@mui/material'

type ContainerProps = {
  className?: string
}
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({ className = '' }) => (
  <Grid item xs={12}>
    aaa
  </Grid>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */

  const presenterProps = {}

  return { ...props, ...presenterProps }
}

export default function FormSessionPostOnlineSettings(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
