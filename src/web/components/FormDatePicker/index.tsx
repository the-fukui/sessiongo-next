import React, { ComponentProps, useEffect } from 'react'
import style from './index.module.scss'
import { DatePicker } from '@mui/lab'
import { Controller, Control } from 'react-hook-form'
import AdapterDayjs from '@mui/lab/AdapterDayjs'
import dayjsJaLocale from 'dayjs/locale/ja'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

type ContainerProps = {
  className?: string
  control: Control<any, object>
  inputName: string
} & PartiallyPartial<ComponentProps<typeof DatePicker>, 'onChange' | 'value'>
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  control,
  inputName,
  ...dateInputProps
}) => (
  <Controller
    control={control}
    name={inputName}
    render={({ field: { onChange, value } }) => (
      <LocalizationProvider dateAdapter={AdapterDayjs} locale={dayjsJaLocale}>
        <DatePicker
          mask="____/__/__"
          {...dateInputProps}
          value={value}
          onChange={onChange}
          className={`${className}`}
        />
      </LocalizationProvider>
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
