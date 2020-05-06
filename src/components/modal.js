import React, { useRef, useEffect } from 'react'

const Modal = ({ children, isOpen = false, onClose = () => {} }) => {
  const contentNOde = useRef()
  const handleOnClose = e => {
    if (!contentNOde.current.contains(e.target)) {
      onClose()
    }
  }

  const handler = e => {
    if (e.key.toLowerCase() === 'escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handler])

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
