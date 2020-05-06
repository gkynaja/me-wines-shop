import React, { useRef, useState, useEffect } from 'react'

const SubscribeScrollingDiv = ({ children, scrollY, offsetY }) => {
  const [y, setY] = useState(0)
  const [timestamp, setTimestamp] = useState(Date.now())
  const node = useRef()

  useEffect(() => {
    const triggerPosition = window.innerHeight / 2
    const { top, bottom } = node.current.getBoundingClientRect()
    const active = top < triggerPosition && bottom > triggerPosition
    let progress = 0

    // if (active) {
    progress = ((triggerPosition - top) / (bottom - top)) * 100
    // }
    if (active && Date.now() - timestamp > 10) {
      console.log(top)
      setY(-progress)
      setTimestamp(Date.now())
    }

    // isInViewport = node.current
    //   ? (node.current.getBoundingClientRect().top < window.innerHeight) &
    //     (node.current.getBoundingClientRect().bottom >= 0)
    //   : false
    // scrollOffset = node.current
    //   ? window.innerHeight - node.current.getBoundingClientRect().top
    //   : 0

    // const windowHeight = window.innerHeight
    // const elementHeight = node.current.getBoundingClientRect().height
    // const currentShown =
    //   ((window.innerHeight - node.current.getBoundingClientRect().top) /
    //     elementHeight) *
    //   100
  }, [scrollY])

  return (
    <div ref={node} className="wrapper" style={{ position: 'relative' }}>
      <div
        style={{
          // transform: `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${
          //   isInViewport ? scrollOffset * -1 * 1 + offsetY : 0
          // },0,1)`,
          transform: `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${y},0,1)`,
          // transform: `translate3d(0px,${y}px,0px)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default SubscribeScrollingDiv
