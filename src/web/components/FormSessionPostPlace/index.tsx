import React, {
  useEffect,
  useRef,
  ComponentProps,
  useState,
  useContext,
} from 'react'
import style from './index.module.scss'
import { Grid, TextField, Switch, FormControlLabel } from '@mui/material'
import { UseFormRegisterReturn } from 'react-hook-form'
import FormPlacePicker from '@web/components/FormPlacePicker'
import SessionPostContext, { Inputs } from '@web/contexts/SessionPostContext'

type ContainerProps = {
  className?: string
  inputName: keyof Inputs
} & ComponentProps<typeof Grid>

type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({ className = '' }) => (
  <>
    <FormPlacePicker spacing={2} />
  </>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */
  const { register } = useContext(SessionPostContext)

  const presenterProps = {}

  return { ...props, ...presenterProps }
}

export default function FormSessionPostPlace(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
