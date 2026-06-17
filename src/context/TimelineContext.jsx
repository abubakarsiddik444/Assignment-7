import { useCallback, useMemo, useState } from 'react'
import { initialTimeline } from '../data/initialTimeline.js'
import { TimelineContext } from './timelineContext.js'
const storageKey = 'keenkeeper.timeline'

function readStoredTimeline() {
  try {
    const stored = localStorage.getItem(storageKey)
    return stored ? JSON.parse(stored) : initialTimeline
  } catch {
    return initialTimeline
  }
}

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState(readStoredTimeline)

  const addEntry = useCallback(({ friendName, type }) => {
    const entry = {
      id: crypto.randomUUID(),
      type,
      title: `${type[0].toUpperCase()}${type.slice(1)} with ${friendName}`,
      friendName,
      date: new Date().toISOString(),
    }

    setTimeline((current) => {
      const next = [entry, ...current]
      localStorage.setItem(storageKey, JSON.stringify(next))
      return next
    })

    return entry
  }, [])

  const value = useMemo(() => ({ timeline, addEntry }), [timeline, addEntry])

  return (
    <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>
  )
}
