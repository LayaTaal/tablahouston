import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from './Logo'

const Header = ({ handleEnter, handleLeave }) => (
  <header className="site-header">
    <Link to="/" className="header-logo">
      <Logo name="home" />
    </Link>
    <nav className="header-nav">
      <ul>
        <li>
          <Link
            to="/guruji"
            name="guru"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            Our Guru
          </Link>
        </li>
        <li>
          <Link
            to="/classes"
            name="classes"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            Classes
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            name="events"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            Student Events
          </Link>
        </li>
        <li>
          <Link
            to="/enroll"
            name="enroll"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            Enroll
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  handleEnter: PropTypes.func,
  handleLeave: PropTypes.func,
}

export default Header
