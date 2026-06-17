import Icon from './Icon.jsx'

const typeIcons = {
  call: 'call',
  text: 'text',
  video: 'video',
}

export default function TimelineEntry({ entry }) {
  return (
    <article className="timeline-entry">
      <div className={`entry-icon ${entry.type}`}>
        <Icon name={typeIcons[entry.type]} />
      </div>
      <div>
        <h3>{entry.title}</h3>
        <time dateTime={entry.date}>
          {new Intl.DateTimeFormat('en', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }).format(new Date(entry.date))}
        </time>
      </div>
    </article>
  )
}
