export default function SummaryCards({ friends, interactions }) {
  const onTrack = friends.filter((friend) => friend.status === 'on-track').length
  const needAttention = friends.filter((friend) => friend.status !== 'on-track').length
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  const thisMonth = interactions.filter((entry) => {
    const date = new Date(entry.date)
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear
  }).length

  const cards = [
    { value: friends.length, label: 'Total Friends' },
    { value: onTrack, label: 'On Track' },
    { value: needAttention, label: 'Need Attention' },
    { value: thisMonth, label: 'Interactions This Month' },
  ]

  return (
    <section className="summary-grid" aria-label="Friendship summary">
      {cards.map((card) => (
        <article className="summary-card" key={card.label}>
          <strong>{card.value}</strong>
          <span>{card.label}</span>
        </article>
      ))}
    </section>
  )
}
