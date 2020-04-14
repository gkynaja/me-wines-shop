import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'
import { ProductCardWithDetail } from '../components/product-card'
import Breadcrumb from '../components/breadcrumb'

const Product = ({ data }) => {
  const { excerpt, frontmatter, fields } = data.product
  return (
    <Layout>
      <div
        style={{
          background: `url(${require('../images/bg.png')}) no-repeat`,
          backgroundSize: 'contain',
        }}
      >
        <div style={{ paddingTop: '200px' }}>
          <Container>
            <Breadcrumb
              list={[
                { text: 'Home', link: '/', active: false },
                { text: 'Wines', link: '/products', active: false },
                {
                  text: frontmatter.name,
                  link: `/${fields.collection}${fields.slag}`,
                  active: true,
                },
              ]}
            />
            {/* <h1
              style={{
                color: '#e1a957',
                marginBottom: '1em',
                fontSize: '1.8vw',
              }}
            >
              {frontmatter.name}
            </h1> */}
            <div style={{ height: '40vw', minHeight: '900px' }}>
              <ProductCardWithDetail excerpt={excerpt} {...frontmatter} />
            </div>
          </Container>
        </div>
      </div>
    </Layout>
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
      excerpt
      frontmatter {
        name
        price
        vintage
        size
        alcohol
        type
        grape
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
