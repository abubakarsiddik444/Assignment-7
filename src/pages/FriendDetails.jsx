import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import TagList from '../components/TagList.jsx'
import { useTimeline } from '../hooks/useTimeline.js'
import { useToast } from '../hooks/useToast.js'

const checkIns = [
  { type: 'call', label: 'Call', icon: 'call' },
  { type: 'text', label: 'Text', icon: 'text' },
  { type: 'video', label: 'Video', icon: 'video' },
]

export default function FriendDetails() {
  const { friendId } = useParams()
  const [friend, setFriend] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addEntry } = useTimeline()
  const { showToast } = useToast()

  useEffect(() => {
    let active = true

    async function loadFriend() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/friends.json`)
        const data = await response.json()
        const found = data.find((item) => String(item.id) === friendId)
        if (active) {
          setFriend(found)
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadFriend()

    return () => {
      active = false
    }
  }, [friendId])

  if (loading) {
    return (
      <div className="page-wrap detail-page">
        <LoadingSpinner />
      </div>
    )
  }

  if (!friend) {
    return (
      <div className="page-wrap not-found compact">
        <h1>Friend not found</h1>
        <Link className="primary-button" to="/">
          Back Home
        </Link>
      </div>
    )
  }

  const handleCheckIn = (type) => {
    const entry = addEntry({ friendName: friend.name, type })
    showToast(`${entry.title} added to timeline.`)
  }

  return (
    <div className="page-wrap detail-page">
      <section className="detail-grid">
        <aside className="profile-column">
          <article className="profile-card">
            <img src={friend.picture} alt={friend.name} />
            <h1>{friend.name}</h1>
            <StatusBadge status={friend.status} />
            <TagList tags={friend.tags} />
            <p className="bio">"{friend.bio}"</p>
            <a className="email-link" href={`mailto:${friend.email}`}>
              <Icon name="mail" />
              {friend.email}
            </a>
          </article>

          <div className="action-stack">
            <button type="button">
              <Icon name="clock" />
              Snooze 2 Weeks
            </button>
            <button type="button">
              <Icon name="archive" />
              Archive
            </button>
            <button className="danger" type="button">
              <Icon name="trash" />
              Delete
            </button>
          </div>
        </aside>

        <section className="detail-content">
          <div className="stat-row">
            <article className="stat-card">
              <strong>{friend.days_since_contact}</strong>
              <span>Days Since Contact</span>
            </article>
            <article className="stat-card">
              <strong>{friend.goal}</strong>
              <span>Goal (Days)</span>
            </article>
            <article className="stat-card">
              <strong>
                {new Intl.DateTimeFormat('en', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }).format(new Date(friend.next_due_date))}
              </strong>
              <span>Next Due</span>
            </article>
          </div>

          <article className="panel goal-card">
            <div>
              <h2>Relationship Goal</h2>
              <p>Connect every <strong>{friend.goal} days</strong></p>
            </div>
            <button type="button">Edit</button>
          </article>

          <article className="panel checkin-card">
            <h2>Quick Check-In</h2>
            <div className="checkin-grid">
              {checkIns.map((checkIn) => (
                <button
                  key={checkIn.type}
                  type="button"
                  onClick={() => handleCheckIn(checkIn.type)}
                >
                  <Icon name={checkIn.icon} />
                  <span>{checkIn.label}</span>
                </button>
              ))}
            </div>
          </article>
        </section>
      </section>
    </div>
  )
}
