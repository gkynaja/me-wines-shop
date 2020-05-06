import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from './layout'
import Container from './container'
import Box from './box'
import Filter from './filter'
import StyledProducts from '../styles/styled-components/products'
import { H1, H4, H5 } from '../styles/styled-components/typography'
// import RedWine from '../images/red-wine.jpg'

const Products = ({ products }) => {
  return (
    <div
      style={{
        background: `url(${require('../images/bg.png')}) no-repeat`,
        backgroundSize: 'contain',
      }}
    >
      <Layout>
        <StyledProducts>
          <StyledProducts.Hero>
            <StyledProducts.Title>
              <H1 tag="h1" color="white">
                Red Wine
              </H1>
            </StyledProducts.Title>
            <div></div>
            {/* <StyledProducts.Image src={RedWine} /> */}
          </StyledProducts.Hero>
          <Container>
            <StyledProducts.Content>
              <StyledProducts.Filter>
                <Filter />
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
    </div>
  )
}

export default Products
