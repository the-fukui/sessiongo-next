import React, { useEffect, useContext } from 'react'
import style from './index.module.scss'
import { Grid, TextField } from '@mui/material'
import SessionPostContext from '@web/contexts/SessionPostContext'

type ContainerProps = {
  className?: string
}
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({ className = '', register }) => (
  <TextField
    label="会場URL"
    //  {...register('place.onlineURL')}
    fullWidth
  />
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */
  const { register } = useContext(SessionPostContext)

  const presenterProps = {
    register,
  }

  return { ...props, ...presenterProps }
}

export default function FormSessionPostOnlineSettings(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
