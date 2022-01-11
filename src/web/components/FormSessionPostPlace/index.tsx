import React, {
  useEffect,
  useRef,
  ComponentProps,
  useState,
  useContext,
} from 'react'
import style from './index.module.scss'
import { Grid, Switch, FormControlLabel, Box } from '@mui/material'
import FormPlacePicker, { Place } from '@web/components/FormPlacePicker'
import SessionPostContext, { Inputs } from '@web/contexts/SessionPostContext'
import { useWatch } from 'react-hook-form'

type ContainerProps = {
  className?: string
  placeInputName: keyof Inputs
  isOnlineInputName: keyof Inputs
} & ComponentProps<typeof Grid>

type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  // handleIsOnline,
  isOnline,
  placeInputName,
  isOnlineInputName,
  register,
  place,
  setPlace,
}) => (
  <>
    <FormControlLabel
      control={<Switch {...register(isOnlineInputName)} />}
      label="オンラインイベント"
      sx={{ paddingBottom: 2 }}
    />
    <Box display={isOnline ? 'block' : 'none'}>
      説明文にURLや使用するツールの説明をどうぞ
    </Box>
    <Box display={isOnline ? 'none' : 'block'}>
      <FormPlacePicker spacing={2} place={place} setPlace={setPlace} />
    </Box>
  </>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */
  const { register, control, setValue } = useContext(SessionPostContext)
  const isOnline = useWatch({ control, name: 'isOnline' })
  const [place, setPlace] = useState<Place | null>(null)

  useEffect(() => {
    if (!place) return
    setValue('place', place)
  }, [place, setValue])

  const presenterProps = {
    isOnline,
    // handleIsOnline,
    register,
    place,
    setPlace,
  }

  return { ...props, ...presenterProps }
}

export default function FormSessionPostPlace(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
