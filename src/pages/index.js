import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Products from '../components/products'
import Events from '../components/events'


const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />

      <Products
        products={data.products}
      />
      <Events
        events={data.events}
      />

    </Layout>
  )
}

export const query = graphql`
  query {
    products: allFile(filter: {sourceInstanceName: {eq: "products"}}) {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              name
              price
              featuredImage
            }
          }
        }
      }
    }
    events: allFile(filter: {sourceInstanceName: {eq: "events"}}) {
      edges {
        node {
          childMarkdownRemark {
            id
            frontmatter {
              title
              place
              featuredImage
            }
          }
        }
      }
    }
  }
`

export default IndexPage
