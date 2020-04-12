import React from 'react'
import Navbar from './style'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <Navbar>
      <input type="checkbox" id="menu-trigger" className="hidden" />
      <input type="checkbox" id="search-trigger" className="hidden" />
      <Navbar.Nav>
        <ul>
          <li>
            Menu
            <span>
              <label htmlFor="menu-trigger">
                <FontAwesomeIcon icon={['far', 'times']} />
              </label>
            </span>
          </li>
          <li>
            <Link to="/">
              <span>
                <FontAwesomeIcon icon={['fad', 'home']} />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link to="products">
              <span>
                <FontAwesomeIcon icon={['fad', 'wine-glass-alt']} />
              </span>
              Wines
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={['fad', 'percentage']} />
              Promotion
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={['fad', 'calendar']} />
              Event
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={['fad', 'th-large']} />
              Blog
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={['fad', 'address-card']} />
              Contact Us
            </Link>
          </li>
        </ul>
      </Navbar.Nav>
      <Navbar.Nav.Overlay htmlFor="menu-trigger" />
      <Navbar.Header>
        <Navbar.Header.LeftMenu htmlFor="menu-trigger">
          <FontAwesomeIcon icon={['fas', 'bars']} />
          <span>Menu</span>
        </Navbar.Header.LeftMenu>
        <Navbar.Header.Search htmlFor="search-trigger">
          <FontAwesomeIcon icon={['far', 'search']} />
        </Navbar.Header.Search>
        <Navbar.Header.Logo>
          <Link to="/">
            <img
              src={require('../../images/logo-woman.png')}
              alt="Me Wine"
              width="48"
              height="48"
              style={{ verticalAlign: 'middle' }}
            />
          </Link>
        </Navbar.Header.Logo>
        <Navbar.Header.Contact>
          <FontAwesomeIcon icon={['fab', 'facebook-square']} title="facebook" />
          <FontAwesomeIcon icon={['fab', 'instagram']} title="instagram" />
          <FontAwesomeIcon icon={['fab', 'line']} title="line" />
        </Navbar.Header.Contact>
      </Navbar.Header>
      <Navbar.BoxSearch>
        <Navbar.BoxSearch.Input />
        <Navbar.BoxSearch.Close htmlFor="search-trigger">
          <FontAwesomeIcon icon={['far', 'times']} />
        </Navbar.BoxSearch.Close>
      </Navbar.BoxSearch>
    </Navbar>
  )
}
