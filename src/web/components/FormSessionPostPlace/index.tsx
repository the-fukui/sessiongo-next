import React, {
  useEffect,
  useRef,
  ComponentProps,
  useState,
  useContext,
} from 'react'
import style from './index.module.scss'
import { Grid, Switch, FormControlLabel, Box } from '@mui/material'
import FormPlacePicker from '@web/components/FormPlacePicker'
import SessionPostContext, { Inputs } from '@web/contexts/SessionPostContext'

type ContainerProps = {
  className?: string
  inputName: keyof Inputs
} & ComponentProps<typeof Grid>

type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  handleIsOnline,
  isOnline,
  TRANSITION_DURATION,
}) => (
  <>
    <FormControlLabel
      control={<Switch onChange={handleIsOnline} value={isOnline} />}
      label="オンラインイベント"
      sx={{ paddingBottom: 2 }}
    />
    <Box display={isOnline ? 'block' : 'none'}>
      説明文にURLや使用するツールの説明をどうぞ
    </Box>
    <Box display={isOnline ? 'none' : 'block'}>
      <FormPlacePicker spacing={2} />
    </Box>
  </>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */
  const { register } = useContext(SessionPostContext)
  const [isOnline, setIsOnline] = useState(false)
  const handleIsOnline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsOnline(event.target.checked)
  }

  const TRANSITION_DURATION = 2000

  const presenterProps = {
    isOnline,
    handleIsOnline,
    TRANSITION_DURATION,
  }

  return { ...props, ...presenterProps }
}

export default function FormSessionPostPlace(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
