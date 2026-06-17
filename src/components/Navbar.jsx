import { NavLink } from 'react-router-dom'
import Icon from './Icon.jsx'

const links = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/timeline', label: 'Timeline', icon: 'timeline' },
  { to: '/stats', label: 'Stats', icon: 'stats' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand" aria-label="KeenKeeper home">
        KeenKeeper
      </NavLink>
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Icon name={link.icon} />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
