import React, { useState, useEffect, useRef } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout/'
import SEO from '../components/seo'
import { CustomerChat } from '../components/chat'
import { Container as GridContainer, Grid } from '../components/grid'
import { ProductGrid } from '../components/product-grid'
import { ProductCardWithDetail } from '../components/product-card'
import Container from '../components/container'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SubscribeScrollingDiv from '../components/subscribeScrollingDiv'
import { motion, useViewportScroll } from 'framer-motion'
import Hero from '../components/hero'
import Product from '../components/product'
import Map from '../components/map'

// const Hero = styled.section`
//   height: 100vh;
//   /* perspective: 1px;
//   overflow-x: hidden;
//   overflow-y: auto; */
//   /* max-height: 700px; */
//   position: relative;
//   transform-style: preserve-3d;
// `
// Hero.GridContainer = styled.div`
//   position: absolute;
//   display: grid;
//   grid-template-columns: 60% 40%;
//   grid-template-rows: 75% 20% 5%;
//   grid-template-areas: 'header header' 'action sub' '. social';
//   height: 100%;
//   z-index: 1;
//   top: 0;
//   transform: translateZ(100px) scale(0.67);
//   transform-origin: 50% 50%;
// `

const IndexPage = ({ data }) => {
  const products = data.allProduct.edges

  const toggleModalActive = () => {
    const body = document.querySelector('body')

    if (body.classList) {
      body.classList.toggle('modal-active')
    } else {
      // For IE9
      let classes = body.className.split(' ')
      let index = classes.indexOf('modal-active')

      if (index >= 0) {
        classes.splice(index, 1)
      } else {
        classes.push('modal-active')
      }
      body.className = classes.join(' ')
    }
  }

  const handler = () => {
    setScrollY(window.scrollY)
  }

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <Product products={products} />
      <Map />

      {/* <CustomerChat /> */}
      {/* <div
        // style={{
        //   background: `url(${require('../images/bg.png')}) no-repeat`,
        //   backgroundSize: 'contain',
        // }}
        style={{
          perspective: '300px',
          overflowX: 'hidden',
          overflowY: 'auto',
          perspectiveOrigin: '50% 90%',
          height: '100vh',
        }}
      >
        <img
          src={require('../images/wine-hand.png')}
          style={{ position: 'absolute', top: '4720px', left: 0 }}
        />

        <Hero>
          <Container>
            <img
              src={require('../images/grape-filter.png')}
              style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
            <Hero.GridContainer>
              <div
                style={{
                  padding: '1rem',
                  gridArea: 'header',
                  display: 'flex',
                  flexFlow: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '3.25em',
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                  Welcome
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '3.25em',
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                  to
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '7em',
                    fontWeight: 'bold',
                    color: '#e1a957',
                    lineHeight: '1',
                  }}
                >
                  ME WINES
                </span>
              </div>
              <div
                style={{ gridArea: 'sub', fontSize: '1.5em', color: '#909090' }}
              >
                Wine shop & bar in Silom, where you can find best wines from all
                over the world. Join us for a glass of wine & some bites. Or
                come by and stock your cellar
              </div>
              <div style={{ gridArea: 'social' }}>
                <FontAwesomeIcon icon={['fab', 'facebook']} />
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </div>
            </Hero.GridContainer>
          </Container>
        </Hero>

        <div
          style={{
            paddingTop: '340px',
          }}
        >
          {products.slice(0, 5).map((product, index) => {
            const { frontmatter, excerpt, price } = product.node
            return (
              <>
                <GridContainer>
                  {index === 0 && (
                    <Grid col={[1, 2]} row={[1, 3]}>
                      <ProductGrid.TextHighlight>
                        <p>Highlight</p>
                      </ProductGrid.TextHighlight>
                    </Grid>
                  )}
                  <Grid col={index % 2 === 0 ? [3, 4] : [4, 5]} row={[4, 5]}>
                    <ProductGrid.Detail>
                      <span>{excerpt}</span>
                    </ProductGrid.Detail>
                  </Grid>
                  <Grid col={index % 2 === 0 ? [2, 3] : [5, 6]} row={[2, 3]}>
                    <ProductGrid.Vintage>
                      {frontmatter.vintage}
                    </ProductGrid.Vintage>
                  </Grid>
                  <Grid col={index % 2 === 0 ? [2, 3] : [5, 6]} row={[3, 4]}>
                    <ProductGrid.Size>{frontmatter.size}</ProductGrid.Size>
                  </Grid>
                  <Grid col={index % 2 === 0 ? [5, 6] : [2, 3]} row={[3, 4]}>
                    <ProductGrid.Alcohol>
                      <span>Alc</span>
                      <span>{frontmatter.alcohol}%</span>
                    </ProductGrid.Alcohol>
                  </Grid>
                  <Grid col={index % 2 === 0 ? [5, 6] : [2, 3]} row={[1, 2]}>
                    <ProductGrid.Image>
                      <img
                        src={require(`../images/grid-${
                          index % 2 === 0 ? 'left' : 'right'
                        }-1.jpg`)}
                      />
                    </ProductGrid.Image>
                  </Grid>
                  <Grid col={index % 2 === 0 ? [4, 5] : [3, 4]} row={[4, 5]}>
                    <ProductGrid.Image>
                      <img
                        src={require(`../images/grid-${
                          index % 2 === 0 ? 'left' : 'right'
                        }-2.jpg`)}
                      />
                    </ProductGrid.Image>
                  </Grid>
                  <Grid col={index % 2 === 0 ? [3, 4] : [4, 5]} row={[5, 6]}>
                    <ProductGrid.Image>
                      <img
                        src={require(`../images/grid-${
                          index % 2 === 0 ? 'left' : 'right'
                        }-3.jpg`)}
                      />
                    </ProductGrid.Image>
                  </Grid>
                  <Grid col={index % 2 === 0 ? [4, 5] : [3, 4]} row={[1, 4]}>
                    <ProductGrid.Title>
                      <ProductGrid.Title.Number>
                        {index + 1}
                      </ProductGrid.Title.Number>
                      <ProductGrid.Title.Underline />
                      <ProductGrid.Title.Brand>
                        {frontmatter.name}
                      </ProductGrid.Title.Brand>
                    </ProductGrid.Title>
                  </Grid>

                  <Grid col={index % 2 === 0 ? [3, 4] : [4, 5]} row={[1, 4]}>
                    <label
                      htmlFor={`trigger-${index}`}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        zIndex: 2,
                      }}
                      onClick={toggleModalActive}
                    ></label>

                    <ProductGrid.BottleImage>
                      <Img
                        fluid={frontmatter.featuredImage.childImageSharp.fluid}
                      />
                    </ProductGrid.BottleImage>
                  </Grid>

                  <input
                    type="checkbox"
                    id={`trigger-${index}`}
                    style={{ display: 'none' }}
                  />
                  <ProductGrid.ProductModal>
                    <label
                      htmlFor={`trigger-${index}`}
                      onClick={toggleModalActive}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '5px',
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: '1.5rem',
                        zIndex: 999,
                      }}
                    >
                      X
                    </label>
                    <ProductCardWithDetail excerpt={excerpt} {...frontmatter} />
                  </ProductGrid.ProductModal>
                </GridContainer>
              </>
            )
          })}
        </div>
        <div style={{ margin: '160px' }}>
          <GridContainer>
            <Grid col={[2, 3]} row={[1, 2]}>
              <ProductGrid.ColorBox color={'#1f1f1f'} />
            </Grid>
            <Grid col={[1, 3]} row={[1, 2]}>
              <ProductGrid.MoreFirstLine>More</ProductGrid.MoreFirstLine>
            </Grid>
            <Grid col={[3, 4]} row={[2, 3]}>
              <ProductGrid.ColorBox color={'#2c2c2c'} />
            </Grid>
            <Grid col={[2, 4]} row={[2, 3]}>
              <ProductGrid.MoreSecondLine>Wine</ProductGrid.MoreSecondLine>
            </Grid>
            <Grid col={[4, -1]} row={[3, -1]}>
              <ProductGrid.MoreProduct>
                <ProductGrid.MoreProduct.Product>
                  {products.slice(0, 11).map((product, index) => {
                    const { frontmatter, excerpt } = product.node
                    return (
                      <ProductGrid.MoreProduct.Product.Wrapper>
                        <Img
                          fluid={
                            frontmatter.featuredImage.childImageSharp.fluid
                          }
                        />
                        <ProductGrid.MoreProduct.Product.Detail>
                          <p>{frontmatter.name}</p>
                          <p>{excerpt}</p>
                        </ProductGrid.MoreProduct.Product.Detail>
                      </ProductGrid.MoreProduct.Product.Wrapper>
                    )
                  })}
                </ProductGrid.MoreProduct.Product>
                <ProductGrid.MoreProduct.Detail>
                  DISCOVER OUR PRODUCTS
                </ProductGrid.MoreProduct.Detail>
              </ProductGrid.MoreProduct>
            </Grid>
          </GridContainer>
        </div>
      </div> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allProduct: allMarkdownRemark(
      filter: { fields: { collection: { eq: "product" } } }
      sort: { fields: frontmatter___name }
      limit: 10
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            collection
            slug
          }
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
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            brandImage {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      group(field: frontmatter___brand) {
        edges {
          node {
            frontmatter {
              name
            }
          }
        }
        fieldValue
      }
    }
    blog: markdownRemark(fields: { collection: { eq: "blog" } }) {
      id
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
      html
    }
  }
`
