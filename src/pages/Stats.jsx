import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { useTimeline } from '../hooks/useTimeline.js'

const colors = {
  text: '#7c3aed',
  call: '#1f5a48',
  video: '#35a86b',
}

export default function Stats() {
  const { timeline } = useTimeline()
  const data = ['text', 'call', 'video'].map((type) => ({
    name: type[0].toUpperCase() + type.slice(1),
    value: timeline.filter((entry) => entry.type === type).length,
    type,
  }))

  return (
    <div className="page-wrap stats-page">
      <h1>Friendship Analytics</h1>
      <article className="analytics-panel">
        <h2>By Interaction Type</h2>
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={68}
                outerRadius={100}
                paddingAngle={6}
                stroke="#ffffff"
                strokeWidth={5}
              >
                {data.map((entry) => (
                  <Cell fill={colors[entry.type]} key={entry.type} />
                ))}
              </Pie>
              <Tooltip />
              <Legend iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </article>
    </div>
  )
}
