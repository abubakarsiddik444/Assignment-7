import { useMemo, useState } from 'react'
import TimelineEntry from '../components/TimelineEntry.jsx'
import { useTimeline } from '../hooks/useTimeline.js'

export default function Timeline() {
  const { timeline } = useTimeline()
  const [filter, setFilter] = useState('all')

  const filteredTimeline = useMemo(() => {
    return timeline
      .filter((entry) => filter === 'all' || entry.type === filter)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [filter, timeline])

  return (
    <div className="page-wrap timeline-page">
      <h1>Timeline</h1>
      <label className="filter-control">
        <span className="sr-only">Filter timeline</span>
        <select value={filter} onChange={(event) => setFilter(event.target.value)}>
          <option value="all">Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </label>
      <section className="timeline-list" aria-label="Interaction timeline">
        {filteredTimeline.length === 0 ? (
          <p className="empty-state">No interactions found. Start reaching out!</p>
        ) : (
          filteredTimeline.map((entry) => (
            <TimelineEntry entry={entry} key={entry.id} />
          ))
        )}
      </section>
    </div>
  )
}
