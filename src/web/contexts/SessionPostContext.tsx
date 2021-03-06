import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useRef,
} from 'react'
import {
  useForm,
  UseFormRegister,
  FieldValues,
  Control,
  UseFormHandleSubmit,
  UseFormReturn,
  SubmitHandler,
} from 'react-hook-form'
import type { Sessions } from '@web/pages/api/v1/sessions'

type State = {
  onSubmit: ReturnType<UseFormReturn<Inputs>['handleSubmit']>
} & UseFormReturn<Inputs>

export interface Inputs {
  title: string
  host: string
  date: string
  startAt: string
  endAt: string
  isOnline: boolean
  place: {
    // onlineURL: string
    name: string
    address: string
    country: string
    region: string
    postalCode: string
    ID: string
    lat: number
    lng: number
  } | null
  features: string[]
  description: string
  thumbnail: File
}

const SessionPostContext = createContext<State>({} as State)

const SessionPostContextProvider: React.FC = ({ children }) => {
  const useFormReturn = useForm<Inputs>()

  const onSubmit = useFormReturn.handleSubmit((data) => {
    console.log({ data })
  })

  return (
    <SessionPostContext.Provider value={{ onSubmit, ...useFormReturn }}>
      {children}
    </SessionPostContext.Provider>
  )
}

export { SessionPostContextProvider }

export default SessionPostContext
