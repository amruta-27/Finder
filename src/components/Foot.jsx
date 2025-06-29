import './Foot.css';
import { Link } from 'react-router-dom';


export default function Foot() {
  return (
    <div className='foot'>
      <hr />
        <footer className='footer' id='footer'>

          <div className="footer-content">
            <h3 className='logo'>StayFinder</h3>
            <p className="description">StayFinder is your trusted hotel booking partner, offering seamless <br />
            reservations at the best prices.Whether it's a weekend getaway or a business <br />
            trip,discover top-rated hotels with ease. Enjoy comfort, convenience, and <br />
              customer-friendly service—all in one place with StayFinder.</p>
          </div>

          <div className="footer-content">
            <h4 className='quick-links'>Quick Links</h4>
            <ul className="links">
              <li className="link"><Link to="/">Home</Link></li>
              <li className="link"><Link to="/about">About Us</Link></li>
              <li className="link"><Link to="/hotels">Services</Link></li>
              <li className="link"><Link to="/about">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-content">
            <h4 className='quick-links'>Legal & Support</h4>
            <ul className="links">
              <li className="link"><Link to="/about">Privacy Policy</Link></li>
              <li className="link"><Link to="/about">Terms of Services</Link></li>
              <li className="link"><Link to="/about">Disclaimer</Link></li>
              <li className="link"><Link to="/about">FAQ</Link></li>
              <li className="link"><Link to="/about">Support</Link></li>
            </ul>
          </div>

          <div className="footer-content">
            <h4 className="quick-links">Subscribe</h4>
            <p className="description">Subscribe us for the latest updates and 
              <br />exclusive offers.</p>
            <form className="subscribe-form">
              <input type="email" id='email' placeholder="Your email address"/>
              <button type="submit" id='submit-email'>Subscribe</button>
            </form>
          </div>
        </footer>
        <hr />
        <div className="footer-bottom">
          <p className='foot-bottom'>&copy; 2025 StayFinder. All rights reserved.</p>
        </div>
    </div>
  )
}
