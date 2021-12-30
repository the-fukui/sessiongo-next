import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useRef,
} from 'react'
import dayjs from 'dayjs'
import type { Sessions } from '@web/pages/api/v1/sessions'

interface State {
  sessions: Sessions //ロードした情報
  searchResults: string[] //検索結果表示用（ID配列）
  query: {
    date?: unixTime
  }
  setQuery: React.Dispatch<React.SetStateAction<State['query']>>
}

const SessionSearchContext = createContext<State>({
  sessions: [],
  searchResults: [],
  query: {},
  setQuery: () => {},
})

/**
 * 初期データ（今月のセッション一覧）読み込み・初期クエリセット
 */
const initialize = async () => {
  const sessions = await fetch('/api/v1/sessions/').then(
    (res) => res.json() as Promise<Sessions>,
  )

  const query = {
    date: dayjs().unix(),
  }

  return {
    sessions,
    query,
  }
}

/**
 * クエリを適用して検索
 */
const search = (sessions: State['sessions'], query: State['query']) => {
  console.log(sessions, query)
  let filtered = sessions

  if (query.date) {
    filtered = filtered.filter((session) =>
      dayjs.unix(session.startAt).isSame(dayjs.unix(query.date), 'day'),
    )
  }

  return filtered.map((session) => session.id)
}

const SessionSearchContextProvider: React.FC = ({ children }) => {
  // const isInitialized = useRef(false) //初期データ（今月のセッション一覧）読み込みフラグ
  const [sessions, setSessions] = useState<State['sessions']>([])
  const [searchResults, setSearchResults] = useState<State['searchResults']>([])
  const [query, setQuery] = useState<State['query']>({})

  useEffect(() => {
    ;(async () => {
      console.log('initialize sessionSearchContext')
      const { sessions, query } = await initialize()
      setSessions(sessions)
      setQuery(query)
    })()
  }, [])

  useEffect(() => {
    const result = search(sessions, query)
    setSearchResults(result)
  }, [query, sessions])

  return (
    <SessionSearchContext.Provider
      value={{ sessions, searchResults, query, setQuery }}
    >
      {children}
    </SessionSearchContext.Provider>
  )
}

export { SessionSearchContextProvider }

export default SessionSearchContext
