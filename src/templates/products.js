import React from 'react'
import { graphql } from 'gatsby'
import ProductList from '../components/products'

const Products = ({ data }) => <ProductList products={data.allProducts.edges} />

export default Products

export const query = graphql`
  query {
    allProducts: allMarkdownRemark(
      filter: { fields: { collection: { eq: "product" } } }
    ) {
      edges {
        node {
          fields {
            collection
            slug
          }
          frontmatter {
            name
            price
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
