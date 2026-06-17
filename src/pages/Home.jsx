import { useEffect, useState } from 'react'
import FriendCard from '../components/FriendCard.jsx'
import Icon from '../components/Icon.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'
import SummaryCards from '../components/SummaryCards.jsx'
import { useTimeline } from '../hooks/useTimeline.js'

export default function Home() {
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)
  const { timeline } = useTimeline()

  useEffect(() => {
    let active = true

    async function loadFriends() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/friends.json`)
        const data = await response.json()
        if (active) {
          setFriends(data)
        }
      } finally {
        if (active) {
          window.setTimeout(() => setLoading(false), 450)
        }
      }
    }

    loadFriends()

    return () => {
      active = false
    }
  }, [])

  return (
    <div className="page-wrap home-page">
      <section className="banner">
        <h1>Friends to keep close in your life</h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="primary-button" type="button">
          <Icon name="plus" />
          Add a Friend
        </button>
      </section>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SummaryCards friends={friends} interactions={timeline} />
          <section className="friends-section">
            <h2>Your Friends</h2>
            <div className="friends-grid">
              {friends.map((friend) => (
                <FriendCard friend={friend} key={friend.id} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
