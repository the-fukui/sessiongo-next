import React, { useEffect, useMemo, useState, useRef } from 'react'
import style from './index.module.scss'
import { TextField, Grid, Select, MenuItem, InputLabel } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import { useForm } from 'react-hook-form'
import AdapterDayjs from '@mui/lab/AdapterDayjs'
import dayjsJaLocale from 'dayjs/locale/ja'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@web/components/FormDatePicker'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { RRule } from 'rrule'
import GoogleMapReact from 'google-map-react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'

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
  recurringOptions,
  placeInput,
  handleApiLoaded,
  defaultCenter,
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
            renderInput={(params) => <TextField {...params} />}
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">繰り返し設定</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={0}
            label="繰り返し設定"
            // onChange={handleChange}
          >
            {recurringOptions.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid container spacing={2} pt={6}>
        <Grid item xs={12}>
          <TextField
            label="開催場所"
            inputRef={placeInput}
            fullWidth
            {...register('placeName')}
          />
        </Grid>
        <Grid item xs={12} minHeight={300}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
              libraries: ['places'],
            }}
            defaultCenter={defaultCenter}
            defaultZoom={15}
            onGoogleApiLoaded={({ map, maps }: { maps: typeof google.maps }) =>
              handleApiLoaded(map, maps)
            }
          />
        </Grid>
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

  //繰り返し選択肢
  const watchedDate = watch(['date'])[0]
  const recurringOptions = useMemo(() => {
    dayjs.extend(weekOfYear)
    const selected = dayjs(watchedDate).locale('ja')
    const date = selected.get('date')
    const dayOfWeek = selected.format('ddd')
    const weekOfMonth = Math.floor((selected.get('date') - 1) / 7) + 1

    return [
      {
        label: '繰り返さない',
        value: 0,
        rrule: '',
      },
      {
        label: `毎週 ${dayOfWeek}曜日`,
        value: 1,
        rrule: new RRule({
          freq: RRule.WEEKLY,
          dtstart: dayjs().toDate(),
        }).toString(),
      },
      {
        label: `毎月 ${date}日`,
        value: 2,
        rrule: new RRule({
          freq: RRule.MONTHLY,
          dtstart: dayjs().toDate(),
        }).toString(),
      },
      {
        label: `毎月 第${weekOfMonth} ${dayOfWeek}曜日`,
        value: 3,
        rrule: new RRule({
          freq: RRule.MONTHLY,
          byweekday: [RRule.FR.nth(1)],
          dtstart: dayjs().toDate(),
        }).toString(),
      },
      // { label: 'カスタム', value: 'custom' },
    ]
  }, [watchedDate])

  //開催場所
  const defaultCenter = {
    lat: 35.66, // 緯度経度
    lng: 139.74,
  }
  const placeInput = useRef<HTMLInputElement>(null)
  const handleApiLoaded = (map, maps: typeof google.maps) => {
    if (placeInput.current) {
      const LatLngFrom = new maps.LatLng(45.3326, 148.4508)
      const LatLngTo = new maps.LatLng(24.2658, 122.5601)
      const bounds = new maps.LatLngBounds(LatLngTo, LatLngFrom)
      const autocomplete = new maps.places.Autocomplete(placeInput.current, {
        bounds,
        strictBounds: false,
        fields: ['geometry', 'place_id', 'name'],
        types: ['establishment'],
      })
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        if (!place.geometry || !place.geometry.location) return

        //開催場所フィールドには店名・地名のみ表示
        if (placeInput.current && place.name)
          placeInput.current.value = place.name

        //mapを選択された地点にセンタリングする
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport)
        } else {
          map.setCenter(place.geometry.location)
          map.setZoom(17)
        }
      })
    }
  }

  const presenterProps = {
    register,
    control,
    handleSubmit,
    onSubmit,
    recurringOptions,
    placeInput,
    handleApiLoaded,
    defaultCenter,
  }

  return { ...props, ...presenterProps }
}

export default function FormSessionPost(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
