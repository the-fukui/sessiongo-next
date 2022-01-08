import { SESSION_FEATURE_LABELS } from '@shared/constants'
import { GeoPoint, Timestamp } from 'firebase/firestore'
export interface User {
  displayName: string | null
  createdAt: number
  updatedAt: number
}

export type SessionStatus = 'public' | 'draft' | 'protected'
export type Features = keyof typeof SESSION_FEATURE_LABELS

/**
 * 繰り返しイベントは
 * @see https://github.com/jakubroztocil/rrule
 * @see https://tex2e.github.io/rfc-translater/html/rfc5545.html
 */
export interface Session {
  createdAt: Timestamp
  updatedAt: Timestamp
  title: string | null
  description: string | null
  status: SessionStatus
  startAt: Timestamp
  duration: number
  endAt: Timestamp
  rrule: string | null
  placeID: string //google map API placeID
  feature: Features[]
}

export interface Place {
  name: string
  coordinate: GeoPoint
}

/**
 * カレンダーView用
 */
export interface SessionCalendar {
  createdAt: Timestamp
  updatedAt: Timestamp
  title: string | null
  startAt: Timestamp
  duration: number
  endAt: Timestamp
  rrule: string | null
}
