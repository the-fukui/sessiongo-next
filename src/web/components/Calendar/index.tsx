import React, { useEffect, useRef, useState } from 'react'
import ReactCalendar, { CalendarProps } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import style from './index.module.scss'
import dayjs from 'dayjs'

type ContainerProps = {
  className?: string
  eventDates: unixTime[]
  onClickDay: CalendarProps['onClickDay']
}
type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  formatDay,
  tileClassName,
  onClickDay,
}) => (
  <div className={`${className}`}>
    <ReactCalendar
      formatDay={formatDay}
      tileClassName={tileClassName}
      onClickDay={onClickDay}
    />
  </div>
)

const useContainer = (props: ContainerProps) => {
  const { eventDates } = props

  const formatDay: CalendarProps['formatDay'] = (locale, date) =>
    String(dayjs(date).get('date'))

  //イベントが有るタイルにスタイルを適用
  const tileClassName: CalendarProps['tileClassName'] = ({ date, view }) => {
    if (view === 'month') {
      const isEventDate = eventDates.some((eventDate) =>
        dayjs.unix(eventDate).isSame(dayjs(date), 'day'),
      )

      if (isEventDate) return style.hasEvent
    }

    return null
  }

  const presenterProps = {
    formatDay,
    tileClassName,
  }

  return { ...props, ...presenterProps }
}

export default function Calendar(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
