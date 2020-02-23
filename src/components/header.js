import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import Icon from '../images/logo.jpg'

const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 10rem;
  width: 100%;
  z-index: 999;
  background-color: transparent;
`

const NavbarGroup = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  grid-template-columns: 1fr auto auto auto auto auto auto;
  justify-items: start;
  align-items: center;

  img {
    width: 3rem;
    border-radius: 50%;
  }

  a {
    padding: 0 1rem;
    color: white;
  }
`

const Header = () => {
  return (
    <Navbar>
      <NavbarGroup>
        <img src={Icon} alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/">Event</Link>
        <Link to="/">Promotion</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact Us</Link>
      </NavbarGroup>
    </Navbar>
  )
}

export default Header
