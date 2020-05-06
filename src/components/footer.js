import React from 'react'
import { Link } from 'gatsby'
import LogoPrimary from '../images/logo-primary.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Section,
  Site,
  Contact,
  Logo,
  Social,
} from '../styles/components/FooterStyles'

const Footer = () => {
  return (
    <Section>
      <Logo>
        <img src={LogoPrimary} width="160" />
        <h5>ME WINES</h5>
        <h6>All rights reserved</h6>
      </Logo>
      <Site>
        <ul>
          <h5>MENU</h5>
          <li>
            <Link activeClassName="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/products">
              Wines
            </Link>
          </li>
          <li>
            <Link to="/">Promotion</Link>
          </li>
          <li>
            <Link to="/">Event</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </Site>
      <Social>
        <h5>FOLLOW US</h5>
        <div>
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          <FontAwesomeIcon icon={['fab', 'youtube']} />
        </div>
      </Social>
      <Contact>
        <h5>CONTACT US</h5>
        <div>
          <p>Phone:&nbsp;</p>
          {/* <FontAwesomeIcon icon={['fas', 'mobile']} /> */}
          <a href="tel:0827836576">082-783-6576</a>
        </div>
        <div>
          <p>Email:&nbsp;</p>
          {/* <FontAwesomeIcon icon={['fas', 'envelope']} /> */}
          <a href="mailto:mewinesshop@gmail.com">mewinesshop@gmail.com</a>
        </div>
        <div>
          <p>Line:&nbsp;</p>
          {/* <FontAwesomeIcon icon={['fab', 'line']} /> */}
          <a href="https://lin.ee/pnN1g5N" target="_blank">
            @mewineshop
          </a>
        </div>
      </Contact>
    </Section>
  )
}

export default Footer
