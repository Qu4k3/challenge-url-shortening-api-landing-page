import {ReactComponent as AppLogo} from '../assets/logo.svg';
import IconFacebook from '../assets/icon-facebook.svg';
import IconInstagram from '../assets/icon-instagram.svg';
import IconPinterest from '../assets/icon-pinterest.svg';
import IconTwitter from '../assets/icon-twitter.svg';

export function Footer() {
  
  return (
    <footer className="container footer">
      <div className='wrapper'>
        <div className="footer__logo">
          <AppLogo fill="#FFFFFF" stroke="#FFFFFF" />
        </div>

        <div className="footer__links">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <a className='social__icon' href="#"><img src={IconFacebook} alt="Facebook" /></a>
          <a className='social__icon' href="#"><img src={IconTwitter} alt="Twitter" /></a>
          <a className='social__icon' href="#"><img src={IconPinterest} alt="Pinterest" /></a>
          <a className='social__icon' href="#"><img src={IconInstagram} alt="Instagram" /></a>
        </div>     
      </div>      
    </footer>
  )
}