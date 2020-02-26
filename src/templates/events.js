import React from 'react'
import { graphql } from 'gatsby'
import EventList from '../components/events'

const Events = ({ data }) => (
  <EventList
    events={data.allProducts.edges}
  />
)

export default Events

export const query = graphql`
  query {
    allProducts: allMarkdownRemark(filter: {fields: {collection: {eq: "event"}}}) {
      edges {
        node {
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
    }
  }
`