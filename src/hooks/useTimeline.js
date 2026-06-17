import { useContext } from 'react'
import { TimelineContext } from '../context/timelineContext.js'

export function useTimeline() {
  return useContext(TimelineContext)
}
