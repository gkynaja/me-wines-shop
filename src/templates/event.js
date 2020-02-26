import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Event = ({ data }) => {
  const { event } = data
  return (
    <div>
      <Img fluid={event.frontmatter.featuredImage.childImageSharp.fluid} />
      <h1>{event.frontmatter.name}</h1>
    </div>
  )
}

export default Event

export const query = graphql`
  query($slug: String!, $collection: String!) {
    event: markdownRemark(fields: {slug: {eq: $slug}, collection: {eq: $collection}}) {
      fields {
        collection
        slug
      }
      frontmatter {
        name
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`