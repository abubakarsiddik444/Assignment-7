export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-wrap footer-inner">
        <h2>KeenKeeper</h2>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="social-title">Social Links</div>
        <div className="social-links" aria-label="Social links">
          <a href="https://github.com/" aria-label="GitHub">
            GH
          </a>
          <a href="https://facebook.com/" aria-label="Facebook">
            f
          </a>
          <a href="https://x.com/" aria-label="X">
            X
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KeenKeeper. All rights reserved.</span>
          <div>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
