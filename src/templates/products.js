import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout'
import Box from '../components/box'
import Filter from '../components/filter'
import {
  Products as StyledProducts,
  Container,
  Content,
  FilterPanel,
  List,
  Card,
  Wrapper,
  Detail,
  Name,
  Price,
} from '../styles/components/ProductsStyles'
import { H1, H4, H5 } from '../styles/styled-components/typography'
import RedWine from '../images/hero-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Breadcrumb from '../components/breadcrumb'
import { motion } from 'framer-motion'
import { config } from '@fortawesome/fontawesome-svg-core'

const spring = {
  type: 'spring',
  damping: 100,
  stiffness: 300,
}

const filterConfig = {
  type: {
    label: 'Type',
    type: 'value',
  },
  country: {
    label: 'Country',
    type: 'value',
  },
  brand: {
    label: 'Brand',
    type: 'value',
  },
  vintage: {
    label: 'Vintage',
    type: 'value',
  },
  price: {
    label: 'Price',
    type: 'range',
  },
}

const buildFilterConfig = (config = {}, data = {}) => {
  const filterConfig = {}

  Object.keys(config).forEach(key => {
    filterConfig[key] = generateFilterByType(config[key], data[key])
  })

  return filterConfig
}

const generateFilterByType = (config = {}, data = []) => {
  /* Type : 'value'
     {
       label: String,
       type: String,
       value: [
         {fieldValue: String, checked: Bool},
         ...
       ]
     }

     Type : 'range'
     {
       label: String,
       type: String,
       range: [min: Number, max: Number],
       value: [
         {fieldValue: Number},
         {fieldValue: Number}
       ]
     }
  */

  switch (config.type) {
    case 'value':
      return {
        ...config,
        value: data.map(value => ({ ...value, checked: false })),
      }
    case 'range':
      const [min, max] = [
        Math.min.apply(
          null,
          data.map(v => v.fieldValue)
        ),
        Math.max.apply(
          null,
          data.map(v => v.fieldValue)
        ),
      ]
      return {
        ...config,
        range: data.length > 0 ? [min, max] : [],
        value: [{ fieldValue: min }, { fieldValue: max }],
      }
  }
}

const checkConditionByType = (type, filterValue, data) => {
  switch (type) {
    case 'value':
      return (
        // Only selected option OR no selected value
        filterValue.filter(f => f.checked).some(f => f.fieldValue === data) ||
        filterValue.every(f => !f.checked)
      )
    case 'range':
      return (
        // Only value between min&max
        data >= filterValue[0].fieldValue && data <= filterValue[1].fieldValue
      )
  }
}

const applyFilter = (data, filter) => {
  console.log(filter)
  return data.filter(({ node }) => {
    // Match all selected condition
    return Object.keys(filter).every(key => {
      const { type, value } = filter[key]
      const data = node.frontmatter[key]
      return checkConditionByType(type, value, data)
    })
  })
}

const Products = ({ data }) => {
  const [filter, setFilter] = useState(
    buildFilterConfig(filterConfig, data.allGroups)
  )
  const products = applyFilter(data.allProducts.edges, filter)

  const handleOnApplyFilter = filter => {
    return () => {
      setFilter(prevFilter => {
        return { ...prevFilter, ...filter }
      })
    }
  }
  console.log('product render')
  return (
    <Layout>
      <Container>
        <Breadcrumb
          list={[
            { text: 'Home', link: '/', active: false },
            { text: 'Wines', link: '/products', active: true },
          ]}
        />

        <Content>
          {/* <input type="checkbox" className="hidden" id="trigger-filter" />
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
          </StyledProducts.Triggerer> */}
          <FilterPanel>
            <Filter filterConfig={filter} onApply={handleOnApplyFilter} />
          </FilterPanel>
          <div>
            <List>
              {products.map(({ node }, index) => (
                <motion.div layoutTransition={spring} key={node.fields.slug}>
                  <Card>
                    <Link to={`/${node.fields.collection}${node.fields.slug}`}>
                      <Wrapper>
                        <Img
                          fluid={
                            node.frontmatter.featuredImage.childImageSharp.fluid
                          }
                        />
                      </Wrapper>
                      <Detail>
                        <Name>{node.frontmatter.name}</Name>
                        <Price>
                          {Intl.NumberFormat('th-th', {
                            style: 'currency',
                            currency: 'THB',
                          }).format(node.frontmatter.price)}
                        </Price>
                      </Detail>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </List>
          </div>
        </Content>
      </Container>
    </Layout>
  )
}

export default Products

export const query = graphql`
  query {
    allProducts: allMarkdownRemark(
      filter: { fields: { collection: { eq: "product" } } }
      sort: { fields: frontmatter___name }
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
      price: group(field: frontmatter___price) {
        fieldValue
      }
    }
  }
`
