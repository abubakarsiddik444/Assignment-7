import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge.jsx'
import TagList from './TagList.jsx'

export default function FriendCard({ friend }) {
  return (
    <Link className="friend-card" to={`/friends/${friend.id}`}>
      <img src={friend.picture} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>{friend.days_since_contact} days ago</p>
      <TagList tags={friend.tags.slice(0, 2)} />
      <StatusBadge status={friend.status} />
    </Link>
  )
}
