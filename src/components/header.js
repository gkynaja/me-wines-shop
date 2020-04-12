import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { breakpoint } from '../styles/styled-components/config/breakpoint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  z-index: 999;
  background-color: white;

  @media (max-width: 1120px) {
    padding: 0.5rem 2rem;
  }

  @media (max-width: ${breakpoint.mobile}px) {
    top: auto;
    bottom: 0;
    padding: 0.5rem 0;
  }
`

const NavbarGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1120px;

  img {
    width: 4rem;
    border-radius: 50%;
    vertical-align: middle;
  }

  a {
    padding: 0 1rem;
  }

  @media (max-width: ${breakpoint.tablet}px) {
    flex-direction: column;

    div:first-child {
      margin-bottom: 1rem;
    }
    div:last-child {
      padding: 1rem 0;
    }
  }
  @media (max-width: ${breakpoint.mobile}px) {
    display: none;
  }
`
const MenuBar = styled.div`
  display: none;
  align-items: center;
  justify-content: space-around;
  color: grey;
  text-align: center;
  font-size: 1.5rem;
  a {
    flex: 1;
  }

  span {
    display: block;
    font-size: 0.5rem;
  }

  @media (max-width: ${breakpoint.mobile}px) {
    display: flex;
  }
`

const Header = () => {
  return (
    <Navbar>
      <NavbarGroup>
        <div>
          <Link to="/">
            <img src={require('../images/logo-woman.png')} alt="logo" />
          </Link>
        </div>
        <div>
          <Link to="/products" activeClassName="nav-active">
            Wines
          </Link>
          <Link to="/" activeClassName="nav-active">
            Promotion
          </Link>
          <Link to="/" activeClassName="nav-active">
            Event
          </Link>
          <Link to="/" activeClassName="nav-active">
            Blog
          </Link>
          <Link to="/" activeClassName="nav-active">
            Contact Us
          </Link>
        </div>
      </NavbarGroup>
      <MenuBar>
        <Link to="/products" activeClassName="nav-active">
          <FontAwesomeIcon icon={['fad', 'wine-glass-alt']} />
          <span>Wines</span>
        </Link>
        <Link to="/" activeClassName="nav-active">
          <FontAwesomeIcon icon={['fad', 'percentage']} />
          <span>Promotion</span>
        </Link>
        <Link to="/" activeClassName="nav-active">
          <FontAwesomeIcon icon={['fad', 'calendar']} />
          <span>Event</span>
        </Link>
        <Link to="/" activeClassName="nav-active">
          <FontAwesomeIcon icon={['fad', 'th-large']} />
          <span>Blog</span>
        </Link>
        <Link to="/" activeClassName="nav-active">
          <FontAwesomeIcon icon={['fad', 'address-card']} />
          <span>Contact Us</span>
        </Link>
      </MenuBar>
    </Navbar>
  )
}

export default Header
