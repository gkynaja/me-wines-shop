import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

const Product = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.name} />
      <div>
        <h1>{frontmatter.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        price
      }
    }
  }
`

export default Product