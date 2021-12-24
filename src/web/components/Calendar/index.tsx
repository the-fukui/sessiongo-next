import React, { useEffect, useRef } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import style from './index.module.scss'
import dayjs from 'dayjs'

interface Props {
  className?: string
}

const Calendar: React.VFC<Props> = ({ className = '' }) => (
  <div className={`${className}`}>
    <ReactCalendar
      formatDay={(locale, date) => String(dayjs(date).get('date'))}
    />
  </div>
)

export default Calendar
