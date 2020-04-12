import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/container'
import Box from '../components/box'
import Filter from '../components/filter'
import StyledProducts from '../styles/styled-components/products'
import { H1, H4, H5 } from '../styles/styled-components/typography'
import RedWine from '../images/hero-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const buildFilterConfig = config => {
  const filterConfig = {}
  Object.keys(config).forEach(key => {
    filterConfig[key] = config[key].map(val => ({ ...val, checked: false }))
  })
  return filterConfig
}

const applyFilter = (data, filter) => {
  console.log(filter)
  return data.filter(({ node }) => {
    {
      return Object.keys(filter).every(key => {
        return (
          filter[key]
            .filter(f => f.checked)
            .some(f => f.fieldValue === node.frontmatter[key]) ||
          filter[key].every(f => !f.checked)
        )
      })
    }
  })
}

const Products = ({ data }) => {
  const [filter, setFilter] = useState(buildFilterConfig(data.allGroups))
  const products = applyFilter(data.allProducts.edges, filter)

  const handleOnApplyFilter = filter => {
    return () => {
      setFilter(filter)
    }
  }

  return (
    <Layout>
      <div
        style={{
          background: `url(${require('../images/bg.png')}) no-repeat`,
          backgroundSize: 'contain',
        }}
      >
        <div
          style={{
            paddingTop: '200px',
          }}
        >
          <StyledProducts>
            <Container>
              <h1
                style={{
                  color: '#e1a957',
                  marginBottom: '1em',
                  fontSize: '2.5vw',
                }}
              >
                {/* Our Wines */}
              </h1>
              <StyledProducts.Content>
                <input type="checkbox" className="hidden" id="trigger-filter" />
                <StyledProducts.FilterOverlay htmlFor="trigger-filter" />
                <StyledProducts.Triggerer>
                  <StyledProducts.Triggerer.Filter htmlFor="trigger-filter">
                    <FontAwesomeIcon icon={['fad', 'sliders-h']} />
                    Filter
                  </StyledProducts.Triggerer.Filter>
                  <StyledProducts.Triggerer.Sorting>
                    <FontAwesomeIcon icon={['fad', 'sort-alt']} />
                    Sort
                  </StyledProducts.Triggerer.Sorting>
                </StyledProducts.Triggerer>
                <StyledProducts.Filter>
                  <Filter filterConfig={filter} onApply={handleOnApplyFilter} />
                </StyledProducts.Filter>
                <StyledProducts.List>
                  {products.map(({ node }) => (
                    <StyledProducts.List.Wrapper>
                      <StyledProducts.Card>
                        <Link
                          to={`/${node.fields.collection}${node.fields.slug}`}
                        >
                          <Box width="150px" m={`0 auto`}>
                            <Img
                              fluid={
                                node.frontmatter.featuredImage.childImageSharp
                                  .fluid
                              }
                            />
                          </Box>
                          <StyledProducts.Card.Content>
                            <Box height="80px">
                              <H5 tag="h5">{node.frontmatter.name}</H5>
                            </Box>
                            <H5 tag="h5">
                              {Intl.NumberFormat('th-th', {
                                style: 'currency',
                                currency: 'THB',
                              }).format(node.frontmatter.price)}
                            </H5>
                          </StyledProducts.Card.Content>
                        </Link>
                      </StyledProducts.Card>
                    </StyledProducts.List.Wrapper>
                  ))}
                </StyledProducts.List>
              </StyledProducts.Content>
            </Container>
          </StyledProducts>
        </div>
      </div>
    </Layout>
  )
}

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
            type
            country
            brand
            vintage
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
    allGroups: allMarkdownRemark(
      filter: { fields: { collection: { eq: "product" } } }
    ) {
      type: group(field: frontmatter___type) {
        fieldValue
      }
      country: group(field: frontmatter___country) {
        fieldValue
      }
      brand: group(field: frontmatter___brand) {
        fieldValue
      }
      vintage: group(field: frontmatter___vintage) {
        fieldValue
      }
    }
  }
`
