import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"

const Events = ({ events }) => {
  return (
    <div>
      {
        events.map(({ node }) => (
          <div>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <h1>{node.frontmatter.name}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default Events