import React, { ComponentProps, useEffect, useContext } from 'react'
import style from './index.module.scss'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import SessionPostContext from '@web/contexts/SessionPostContext'
import { useWatch } from 'react-hook-form'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import dayjs from 'dayjs'

type ContainerProps = {
  className?: string
} & ComponentProps<typeof FormControl>

type Props = ReturnType<typeof useContainer>

const Presenter: React.VFC<Props> = ({
  className = '',
  recurringOptions,
  ...formControlProps
}) => (
  <FormControl {...formControlProps}>
    <InputLabel id="recurring-options">繰り返し設定</InputLabel>
    <Select
      labelId="recurring-options"
      defaultValue={0}
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
)

const useContainer = (props: ContainerProps) => {
  /** Logic here */
  const { control } = useContext(SessionPostContext)

  //繰り返し選択肢用
  const watchedDate = useWatch({ control, name: 'date' })

  dayjs.extend(weekOfYear)
  const selected = dayjs(watchedDate).locale('ja')
  const date = selected.get('date')
  const dayOfWeek = selected.format('ddd')
  const weekOfMonth = Math.floor((selected.get('date') - 1) / 7) + 1

  const recurringOptions = [
    {
      label: '繰り返さない',
      value: 0,
      // rrule: '',
    },
    {
      label: `毎週 ${dayOfWeek}曜日`,
      value: 1,
      // rrule: new RRule({
      //   freq: RRule.WEEKLY,
      //   dtstart: dayjs().toDate(),
      // }).toString(),
    },
    {
      label: `毎月 ${date}日`,
      value: 2,
      // rrule: new RRule({
      //   freq: RRule.MONTHLY,
      //   dtstart: dayjs().toDate(),
      // }).toString(),
    },
    {
      label: `毎月 第${weekOfMonth} ${dayOfWeek}曜日`,
      value: 3,
      // rrule: new RRule({
      //   freq: RRule.MONTHLY,
      //   byweekday: [RRule.FR.nth(1)],
      //   dtstart: dayjs().toDate(),
      // }).toString(),
    },
    // { label: 'カスタム', value: 'custom' },
  ]

  const presenterProps = {
    recurringOptions,
  }

  return { ...props, ...presenterProps }
}

/**
 * 繰り返しイベント設定
 * @param props dayOfWeek, date, weekOfMonth, className, ...formControlProps
 */
export default function FormSessionPostRecurringOptions(props: ContainerProps) {
  return <Presenter {...useContainer(props)} />
}
