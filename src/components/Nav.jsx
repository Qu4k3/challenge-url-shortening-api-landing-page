import { useState } from 'react';
import AppLogo from '../assets/logo.svg';
import { FaBars } from "react-icons/fa";

export function Nav() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <section className="container nav nav--mobile">
      <div className='wrapper'>
        <div className="nav__logo">
          <img src={AppLogo} alt="Shortly" />
        </div>

        <div className="nav__links">
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

        <div className="nav__actions">
          <a href="#">Login</a>
          <a className='btn' href="#">Sign Up</a>
        </div>

        <FaBars
          className='nav__hamburguer'
          size='25px'
          onClick={toggleHamburger}
        />
      </div>
    </section>
  )
}