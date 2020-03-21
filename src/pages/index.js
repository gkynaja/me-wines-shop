import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import Text from '../components/typography/text'
import Button from '../components/button'
import HeroRight from '../images/hero-1.png'
import HeroLeft from '../images/hero-2.png'
import Hero from '../styles/styled-components/hero'
import { breakpoint } from '../styles/styled-components/config/breakpoint'
import { CustomerChat } from '../components/chat'

const Inner = styled.div`
  display: table-cell;
  vertical-align: middle;
`
const Relative = styled.div`
  position: relative;
`
const ProductSection = styled.section`
  display: table;
  width: 100%;
  padding: 5rem 0 10rem 0;
  background-color: rgba(255, 253, 247, 0.5);

  h4 {
    position: relative;
    display: inline-block;
  }
  h4::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: coral;
    z-index: -1;
    transform: skewX(10deg) skewY(-3deg);
    border-radius: 4px;
  }

  @media (max-width: ${breakpoint.mobile}px) {
    display: none;
  }
`
const ProductLayout = styled.div`
  text-align: center;
  text-transform: uppercase;
`
const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`
const ProductCard = styled.div`
  width: 200px;
`
const PromotionSection = styled.section`
  display: table;
  width: 100%;
  padding: 5rem 0 10rem 0;

  h4 {
    position: relative;
    display: inline-block;
  }
  h4::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: coral;
    z-index: -1;
    transform: skewX(10deg) skewY(-3deg);
    border-radius: 4px;
  }

  @media (max-width: ${breakpoint.mobile}px) {
    display: none;
  }
`
const BlogSection = styled.section`
  display: table;
  width: 100%;
  padding: 5rem 0;

  background-color: #fffdf7;

  @media (max-width: ${breakpoint.mobile}px) {
    display: none;
  }
`
const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  align-items: center;
`

const Testimonial = styled.section`
  display: table;
  width: 100%;
  padding: 5rem 10rem;

  @media (max-width: ${breakpoint.mobile}px) {
    display: none;
  }
`
const TestimonialLayoutGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
  align-items: center;
`

const IndexPage = ({ data }) => {
  const [timing, setTiming] = useState({})

  useEffect(() => {
    const id = setTimeout(() => {
      setTiming({ animated: true })
    }, 500)

    return () => {
      clearTimeout(id)
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <CustomerChat />
      {/* Hero */}
      <Hero>
        <Hero.Title {...timing}>
          <Text type="h1" weight="bold" color="secondary">
            Me Wines Shop
          </Text>
        </Hero.Title>

        <Hero.Left>
          <Hero.AlignBox>
            <Hero.ImageWrapper {...timing}>
              <Hero.Left.Image src={HeroLeft} />
            </Hero.ImageWrapper>
            <a href="#anchor">
              <Hero.Button {...timing}>
                <span>Our Wines</span>
              </Hero.Button>
            </a>
          </Hero.AlignBox>
        </Hero.Left>

        <Hero.Right>
          <Hero.ImageWrapper {...timing}>
            <Hero.Right.Image src={HeroRight} {...timing} />
          </Hero.ImageWrapper>
        </Hero.Right>
      </Hero>

      {/* Product */}
      <ProductSection id="anchor">
        <Inner>
          <Container>
            <ProductLayout>
              <Text type="h4" weight="bold">
                OUR WINES
              </Text>
              <Link to="/products">
                <Text weight="bold" color="accent">
                  SEE ALL
                </Text>
              </Link>
              <ProductList>
                {data.allProduct.edges.map(({ node }) => (
                  <ProductCard>
                    <Img
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                    />
                    <Link to={`/${node.fields.collection}${node.fields.slug}`}>
                      <Text noMargin weight="bold">
                        {node.frontmatter.name}
                      </Text>
                    </Link>
                    <Text color="accent" weight="bold">
                      {Intl.NumberFormat('th-th', {
                        style: 'currency',
                        currency: 'THB',
                      }).format(node.frontmatter.price)}
                    </Text>
                  </ProductCard>
                ))}
              </ProductList>
            </ProductLayout>
          </Container>
        </Inner>
      </ProductSection>

      {/* Promotion */}
      <PromotionSection>
        <Inner>
          <Container>
            <ProductLayout>
              <Text type="h4" weight="bold">
                OUR PROMOTION
              </Text>
              <Link to="/products">
                <Text weight="bold" color="accent">
                  SEE ALL
                </Text>
              </Link>
              <ProductList>
                {data.allProduct.edges.map(({ node }) => (
                  <ProductCard>
                    <Img
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                    />
                    <Link to={`/${node.fields.collection}${node.fields.slug}`}>
                      <Text noMargin weight="bold">
                        {node.frontmatter.name}
                      </Text>
                    </Link>
                    <Text color="accent" weight="bold">
                      {Intl.NumberFormat('th-th', {
                        style: 'currency',
                        currency: 'THB',
                      }).format(node.frontmatter.price)}
                    </Text>
                  </ProductCard>
                ))}
              </ProductList>
            </ProductLayout>
          </Container>
        </Inner>
      </PromotionSection>

      {/* Blog */}
      <BlogSection>
        <Inner>
          <Container>
            <BlogLayout>
              <Img
                fluid={
                  data.blog.frontmatter.featuredImage.childImageSharp.fluid
                }
              />
              <Relative>
                {/* <BlogSpot src={Spot06} /> */}
                <Text type="h1" fontType="display">
                  {data.blog.frontmatter.title}
                </Text>
                <Text>{data.blog.excerpt}</Text>
                <Button mt="xl">Read</Button>
              </Relative>
            </BlogLayout>
          </Container>
        </Inner>
      </BlogSection>

      {/* Testimonial */}
      <Testimonial>
        <Inner>
          <Container>
            <TestimonialLayoutGrid>
              <Text type="h3" weight="500">
                “Best wine quality and best of service. Come to join us every
                friday night”
              </Text>
              <div>Anonymous</div>
            </TestimonialLayoutGrid>
          </Container>
        </Inner>
      </Testimonial>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allProduct: allMarkdownRemark(
      filter: { fields: { collection: { eq: "product" } } }
    ) {
      edges {
        node {
          id
          fields {
            collection
            slug
          }
          frontmatter {
            name
            price
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
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
