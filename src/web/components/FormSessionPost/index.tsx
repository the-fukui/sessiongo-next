import React, { useEffect } from 'react'
import style from './index.module.scss'
import { TextField, Grid } from '@mui/material'
import { useForm, Controller, Control } from 'react-hook-form'
import AdapterDayjs from '@mui/lab/AdapterDayjs'
import dayjsJaLocale from 'dayjs/locale/ja'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@web/components/FormDatePicker'

type ContainerProps = {
  className?: string
}
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  register,
  control,
  handleSubmit,
  onSubmit,
}) => (
  <form className={`${className}`} onSubmit={handleSubmit(onSubmit)}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          {...register('title')}
          label="セッションタイトル"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register('host')}
          label="セッションホスト"
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs} locale={dayjsJaLocale}>
          <DatePicker
            label="開催日"
            mask="____/__/__"
            control={control}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  </form>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */
  const { register, control, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log({ data })
  }

  const presenterProps = {
    register,
    control,
    handleSubmit,
    onSubmit,
  }

  return { ...props, ...presenterProps }
}

export default function FormSessionPost(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
