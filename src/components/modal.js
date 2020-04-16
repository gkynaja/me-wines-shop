import React, { useRef } from 'react'

const Modal = ({ children, isOpen = false, onClose = () => {} }) => {
  const contentNOde = useRef()
  const handleOnClose = e => {
    if (contentNOde.current.contains(e.target)) {
      return false
    }

    onClose()
  }

  return (
    <div
      className={`modal ${isOpen ? 'visible' : 'hidden'}`}
      onClick={handleOnClose}
    >
      <div className="content" ref={contentNOde}>
        {children}
      </div>
    </div>
  )
}

export default Modal
