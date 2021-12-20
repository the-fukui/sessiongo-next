import { SessionFreqType } from './firestore.d'
export interface User {
  displayName: string | null
  createdAt: number
  updatedAt: number
}

export type SessionStatus = 'public' | 'draft' | 'protected'

/**
 * 繰り返しイベントは
 * @see https://github.com/jakubroztocil/rrule
 * @see https://tex2e.github.io/rfc-translater/html/rfc5545.html
 */
export interface Session {
  createdAt: number
  updatedAt: number
  title: string | null
  description: string | null
  status: SessionStatus
  startAt: number
  endAt: number
  rrule: string | null
  placeID: string //google map API placeID
}

export interface Place {
  name: string
}
