import AppLogo from '../assets/logo.svg';

export function Nav() {

  return (
    <section className="nav">
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
    </section>
  )
}