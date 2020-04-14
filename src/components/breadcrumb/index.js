import React from 'react'
import { Link } from 'gatsby'
import Breadcrumb from './style'

export default ({ list }) => {
  return (
    <Breadcrumb>
      {list.map(({ text, link, active }, idx) => (
        <Breadcrumb.List active={active}>
          {active ? <span>{text}</span> : <Link to={`${link}`}>{text}</Link>}
        </Breadcrumb.List>
      ))}
    </Breadcrumb>
  )
}
