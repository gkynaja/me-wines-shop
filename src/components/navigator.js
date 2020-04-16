import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from './modal'

const Navigator = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <nav className="nav">
        <div className="nav__menu interact" onClick={() => setOpenModal(true)}>
          <FontAwesomeIcon icon={['fas', 'bars']} />
          <span>Menu</span>
        </div>
        <div className="nav__logo"></div>
        <div className="nav__search interact">
          <FontAwesomeIcon icon={['far', 'search']} />
        </div>
      </nav>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <aside className={`nav--sidemenu ${openModal ? `animated` : ''}`}>
          <h5>Menu</h5>
          <ul className="interact">
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
        </aside>
      </Modal>
    </>
  )
}
export default Navigator
