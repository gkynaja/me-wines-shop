import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from './layout'
import Container from './container'
import StyledProducts from '../styles/styled-components/products'
import { H1, H4, H5 } from '../styles/styled-components/typography'
import RedWine from '../images/red-wine.jpg'

const Products = ({ products }) => {
  return (
    <Layout>
      <StyledProducts>
        <StyledProducts.Hero>
          <StyledProducts.Title>
            <H1 tag="h1" color="white">
              Red Wine
            </H1>
          </StyledProducts.Title>
          <div></div>
          <StyledProducts.Image src={RedWine} />
        </StyledProducts.Hero>
        <Container>
          <StyledProducts.Content>
            <StyledProducts.Filter>
              <H4 tag="h4">Filters</H4>
              <StyledProducts.Filter.Group>
                <StyledProducts.Filter.Check id="vintage" />
                <H5 tag="label" htmlFor="vintage">
                  Vintage
                </H5>
                <StyledProducts.Filter.Option>
                  <li>
                    <input type="checkbox" /> A
                  </li>
                  <li>
                    <input type="checkbox" /> B
                  </li>
                  <li>
                    <input type="checkbox" /> C
                  </li>
                </StyledProducts.Filter.Option>
              </StyledProducts.Filter.Group>
              <StyledProducts.Filter.Group>
                <StyledProducts.Filter.Check id="producer" />
                <H5 tag="label" htmlFor="producer">
                  Producer
                </H5>
                <StyledProducts.Filter.Option>
                  <li>
                    <input type="checkbox" /> A
                  </li>
                  <li>
                    <input type="checkbox" /> B
                  </li>
                  <li>
                    <input type="checkbox" /> C
                  </li>
                </StyledProducts.Filter.Option>
              </StyledProducts.Filter.Group>
              <StyledProducts.Filter.Group>
                <StyledProducts.Filter.Check id="country" />
                <H5 tag="label" htmlFor="country">
                  Country
                </H5>
                <StyledProducts.Filter.Option>
                  <li>
                    <input type="checkbox" /> A
                  </li>
                  <li>
                    <input type="checkbox" /> B
                  </li>
                  <li>
                    <input type="checkbox" /> C
                  </li>
                </StyledProducts.Filter.Option>
              </StyledProducts.Filter.Group>
              <StyledProducts.Filter.Group>
                <StyledProducts.Filter.Check id="type" />
                <H5 tag="label" htmlFor="type">
                  Type
                </H5>
                <StyledProducts.Filter.Option>
                  <li>
                    <input type="checkbox" /> A
                  </li>
                  <li>
                    <input type="checkbox" /> B
                  </li>
                  <li>
                    <input type="checkbox" /> C
                  </li>
                </StyledProducts.Filter.Option>
              </StyledProducts.Filter.Group>
              <StyledProducts.Filter.Group>
                <StyledProducts.Filter.Check id="price" />
                <H5 tag="label" htmlFor="price">
                  Price
                </H5>
                <StyledProducts.Filter.Option>
                  <li>
                    <input type="checkbox" /> A
                  </li>
                </StyledProducts.Filter.Option>
              </StyledProducts.Filter.Group>
            </StyledProducts.Filter>
            <StyledProducts.List>
              {products.map(({ node }) => (
                <StyledProducts.List.Wrapper>
                  <StyledProducts.Card>
                    <Img
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                    />
                    <StyledProducts.Card.Content>
                      <H5 tag="h5">{node.frontmatter.name}</H5>
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
