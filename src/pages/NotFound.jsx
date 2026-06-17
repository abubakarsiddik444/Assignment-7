import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-wrap not-found">
      <h1>404</h1>
      <p>The page you are looking for is not part of KeenKeeper.</p>
      <Link className="primary-button" to="/">
        Back Home
      </Link>
    </div>
  )
}
