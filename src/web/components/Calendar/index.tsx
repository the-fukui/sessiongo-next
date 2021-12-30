import React, { useEffect, useRef } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import style from './index.module.scss'
import dayjs from 'dayjs'

type ContainerProps = {
  className?: string
}
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({ className = '' }) => (
  <div className={`${className}`}>
    <ReactCalendar
      formatDay={(locale, date) => String(dayjs(date).get('date'))}
    />
  </div>
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */

  const presenterProps = {}

  return { ...props, ...presenterProps }
}

export default function Calendar(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
