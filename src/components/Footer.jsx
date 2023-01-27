import { ReactComponent as AppLogo } from '../assets/logo-white.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export function Footer() {

  return (
    <footer className="container footer">
      <div className='wrapper'>
        <div className="footer__logo">
          <AppLogo />
        </div>

        <div className="footer__links">
          <div>
            <h5>Features</h5>
            <ul>
              <li><a href="#">Link Shortening</a></li>
              <li><a href="#">Branded Links</a></li>
              <li><a href="#">Analytics</a></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__social">
          <a className='social__icon' href="#"><FaFacebookSquare size="1.8rem" /></a>
          <a className='social__icon' href="#"><FaTwitter size="1.8rem" /></a>
          <a className='social__icon' href="#"><FaPinterest size="1.8rem" /></a>
          <a className='social__icon' href="#"><FaInstagram size="1.8rem" /></a>
        </div>
      </div>
    </footer>
  )
}