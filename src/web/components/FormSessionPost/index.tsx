import React, { useEffect, useMemo, useState, useRef } from 'react'
import style from './index.module.scss'
import { TextField, Grid, Select, MenuItem, InputLabel } from '@mui/material'
import { useForm } from 'react-hook-form'
import AdapterDayjs from '@mui/lab/AdapterDayjs'
import dayjsJaLocale from 'dayjs/locale/ja'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@web/components/FormDatePicker'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import FormSessionPostRecurringOptions from '@web/components/FormSessionPostRecurringOptions'
import FormSessionPostPlacePicker from '@web/components/FormSessionPostPlacePicker'
import FormSessionPostFeatures from '@web/components/FormSessionPostFeatures'

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
  recurringOptionsProps,
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
    </Grid>
    <Grid container spacing={2} pt={6}>
      <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs} locale={dayjsJaLocale}>
          <DatePicker
            label="開催日"
            mask="____/__/__"
            control={control}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...register('startAt')}
          label="開始時刻"
          type="time"
          defaultValue="18:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          {...register('endAt')}
          label="終了時刻"
          type="time"
          defaultValue="18:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <FormSessionPostRecurringOptions
          fullWidth
          recurringOptionsProps={recurringOptionsProps}
        />
      </Grid>
    </Grid>
    <FormSessionPostPlacePicker
      spacing={2}
      pt={6}
      inputRegister={{ ...register('name') }}
    />
    <Grid container spacing={2} pt={6}>
      <Grid item xs={12}>
        <FormSessionPostFeatures fullWidth />
      </Grid>
    </Grid>
  </form>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */
  const { register, control, handleSubmit, watch } = useForm()
  const onSubmit = (data) => {
    console.log({ data })
  }

  //繰り返し選択肢用
  const watchedDate = watch(['date'])[0]
  const recurringOptionsProps = useMemo(() => {
    dayjs.extend(weekOfYear)
    const selected = dayjs(watchedDate).locale('ja')
    const date = selected.get('date')
    const dayOfWeek = selected.format('ddd')
    const weekOfMonth = Math.floor((selected.get('date') - 1) / 7) + 1

    return { date, dayOfWeek, weekOfMonth }
  }, [watchedDate])

  const presenterProps = {
    register,
    control,
    handleSubmit,
    onSubmit,
    recurringOptionsProps,
  }

  return { ...props, ...presenterProps }
}

export default function FormSessionPost(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
