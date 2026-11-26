import { ArrowUpRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand footer-logo" to="/"><span className="brand-mark" aria-hidden="true"><span /></span><span className="brand-name">QUIT <b>ANYTHING</b></span></Link>
            <p>Take Back Control.</p>
            <a className="footer-email" href="mailto:solid.tv.100@gmail.com"><Mail size={15} /> solid.tv.100@gmail.com</a>
          </div>
          <div className="footer-column"><h2>Explore</h2><Link to="/">Home</Link><Link to="/features">Features</Link><Link to="/about">About Us</Link><Link to="/contact">Contact Us</Link></div>
          <div className="footer-column"><h2>Legal & privacy</h2><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms of Service</Link><Link to="/data-deletion">Data Deletion</Link></div>
          <div className="footer-note"><span className="eyebrow">A little progress, every day</span><p>Your journey is personal. Your progress is worth celebrating.</p><Link to="/features" className="text-link">Explore the app <ArrowUpRight size={15} /></Link></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Quit Anything. All rights reserved.</span><span>Made for your next small step.</span></div>
      </div>
    </footer>
  )
}
