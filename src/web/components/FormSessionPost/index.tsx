import React, { useEffect, useMemo, useContext } from 'react'
import style from './index.module.scss'
import { TextField, Grid, Button } from '@mui/material'
import DatePicker from '@web/components/FormDatePicker'
import SessionPostContext from '@web/contexts/SessionPostContext'
import FormSessionPostRecurringOptions from '@web/components/FormSessionPostRecurringOptions'
import FormSessionPostPlace from '@web/components/FormSessionPostPlace'
import FormSessionPostFeatures from '@web/components/FormSessionPostFeatures'

type ContainerProps = {
  className?: string
}
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  register,
  control,
  onSubmit,
}) => (
  <form className={`${className}`} onSubmit={onSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          {...register('title')}
          label="セッションタイトル"
          size="medium"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register('host')}
          label="セッションホスト"
          size="medium"
          fullWidth
        />
      </Grid>
    </Grid>
    <Grid container spacing={2} pt={6}>
      <Grid item xs={6}>
        <DatePicker
          label="開催日"
          control={control}
          inputName="date"
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
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
        <FormSessionPostRecurringOptions fullWidth />
      </Grid>
    </Grid>
    <Grid container spacing={2} pt={6}>
      <Grid item xs={12}>
        <FormSessionPostPlace
          placeInputName="place"
          isOnlineInputName="isOnline"
        />
      </Grid>
    </Grid>
    <Grid container spacing={2} pt={6}>
      <Grid item xs={12}>
        <FormSessionPostFeatures fullWidth inputName="features" />
      </Grid>
    </Grid>
    <Grid container spacing={2} pt={6}>
      <Grid item xs={12}>
        <TextField
          multiline
          label="説明文"
          rows={5}
          fullWidth
          {...register('description')}
        />
      </Grid>
    </Grid>
    <Grid container spacing={2} pt={6}>
      <Grid item xs={12} textAlign={'center'}>
        <Button type="submit" variant={'contained'}>
          投稿する
        </Button>
      </Grid>
    </Grid>
  </form>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */
  const { register, control, handleSubmit, onSubmit } =
    useContext(SessionPostContext)

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
