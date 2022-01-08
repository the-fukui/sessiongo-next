import React, { useEffect, ComponentProps } from 'react'
import style from './index.module.scss'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
} from '@mui/material'

type ContainerProps = {
  className?: string
} & ComponentProps<typeof FormControl>
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  ...formControlProps
}) => (
  <FormControl className={`${className}`} {...formControlProps}>
    <FormLabel>特徴</FormLabel>
    <FormGroup row>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel control={<Checkbox />} label="Disabled" />
    </FormGroup>
  </FormControl>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */

  const presenterProps = {}

  return { ...props, ...presenterProps }
}

export default function FormSessionPostFeatures(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
