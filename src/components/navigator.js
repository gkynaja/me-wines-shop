import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from './modal'
import { Nav, SideMenu } from '../styles/components/NavigatorStyles'

const Navigator = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Nav>
        <div onClick={() => setOpenModal(true)}>
          <FontAwesomeIcon icon={['fas', 'bars']} />
          <span>Menu</span>
        </div>
        <div></div>
        <div>
          <FontAwesomeIcon icon={['far', 'search']} />
        </div>
      </Nav>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <SideMenu
          className={`${openModal ? `animated` : ''}`}
          active={openModal}
        >
          <h5>Menu</h5>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Wines</Link>
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
        </SideMenu>
      </Modal>
    </>
  )
}
export default Navigator
