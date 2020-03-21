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
      <StyledProducts>
        <StyledProducts.Hero>
          <StyledProducts.Title>
            <H1 tag="h1" color="white" data-text="Our Wines">
              Our Wines
            </H1>
          </StyledProducts.Title>
          <div></div>
          <StyledProducts.Image src={RedWine} />
        </StyledProducts.Hero>
        <Container>
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
                    <Box width="250px">
                      <Img
                        fluid={
                          node.frontmatter.featuredImage.childImageSharp.fluid
                        }
                      />
                    </Box>
                    <StyledProducts.Card.Content>
                      <Box height="50px">
                        <H5 tag="h5">{node.frontmatter.name}</H5>
                      </Box>
                      <H5 tag="h5">
                        {Intl.NumberFormat('th-th', {
                          style: 'currency',
                          currency: 'THB',
                        }).format(node.frontmatter.price)}
                      </H5>
                      <Link
                        to={`/${node.fields.collection}${node.fields.slug}`}
                      >
                        <StyledProducts.Card.Button>
                          Detail
                        </StyledProducts.Card.Button>
                      </Link>
                    </StyledProducts.Card.Content>
                  </StyledProducts.Card>
                </StyledProducts.List.Wrapper>
              ))}
            </StyledProducts.List>
          </StyledProducts.Content>
        </Container>
      </StyledProducts>
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
      producer: group(field: frontmatter___country) {
        fieldValue
      }
      vintage: group(field: frontmatter___country) {
        fieldValue
      }
    }
  }
`
