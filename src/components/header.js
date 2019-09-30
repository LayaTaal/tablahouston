import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from './Logo'

const Header = () => (
  <header className="site-header">
    <Link to="/" className="header-logo">
      <Logo />
    </Link>
    <nav className="header-nav">
      <ul>
        <li>
          <Link to="/guruji">Our Guru</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/events">Student Events</Link>
        </li>
        <li>
          <Link to="/enroll">Enroll</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
