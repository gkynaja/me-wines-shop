import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { H1 } from '../styles/styled-components/typography'

const Product = ({ data }) => {
  const { product } = data
  return (
    <div>
      <Img fluid={product.frontmatter.featuredImage.childImageSharp.fluid} />
      <h1>{product.frontmatter.name}</h1>
      <H1 tag="h1">Test Typography</H1>
    </div>
  )
}

export default Product

export const query = graphql`
  query($slug: String!, $collection: String!) {
    product: markdownRemark(
      fields: { slug: { eq: $slug }, collection: { eq: $collection } }
    ) {
      fields {
        collection
        slug
      }
      frontmatter {
        name
        featuredImage {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
