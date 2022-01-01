import React, { ComponentProps, useEffect } from 'react'
import style from './index.module.scss'
import { DatePicker } from '@mui/lab'
import { DateInputProps } from '@mui/lab/internal/pickers/PureDateInput'
import { Controller, Control, Path } from 'react-hook-form'

type ContainerProps = {
  className?: string
  error?: string
  control: Control
} & PartiallyPartial<ComponentProps<typeof DatePicker>, 'onChange' | 'value'>
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  control,
  error,
  ...dateInputProps
}) => (
  <Controller
    control={control}
    name={'date'}
    render={({ field: { onChange, value } }) => (
      <DatePicker
        {...dateInputProps}
        value={value}
        onChange={onChange}
        className={`${className}`}
      />
    )}
  />
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */

  const presenterProps = {}

  return { ...props, ...presenterProps }
}

export default function FormDatePicker(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
