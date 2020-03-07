import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import Text from '../components/typography/text'
import Button from '../components/button'

import Spot06 from '../images/spots-06.png'
import HeroRight from '../images/hero-1.png'
import HeroLeft from '../images/hero-2.png'

const SlideFromLeft = keyframes`
  from {
    transform: translateX(-40px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`
const SlideFromBottom = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
const HeroSection = styled.section`
  height: 700px;
  overflow: hidden;
  position: relative;
  background-color: #ffcb96;
`
const Inner = styled.div`
  display: table-cell;
  vertical-align: middle;
`
const Relative = styled.div`
  position: relative;
`
const Title = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  z-index: 1;
  opacity: 0;

  animation: ${SlideFromBottom} 0.3s 1s ease-out forwards;
`
const HeroL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  width: 45%;
  height: 700px;
  float: left;
`
const ProductSection = styled.section`
  display: table;
  width: 100%;
  padding: 5rem 0 10rem 0;
  background-color: rgba(255, 253, 247, 0.5);
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
`
const BlogSection = styled.section`
  display: table;
  width: 100%;
  padding: 5rem 0;

  background-color: #fffdf7;
`
const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  align-items: center;
`
const BlogSpot = styled.img`
  position: absolute;
  top: -20rem;
  right: -5rem;

  width: 20rem;
`
const Testimonial = styled.section`
  display: table;
  width: 100%;
  padding: 5rem 10rem;
`
const TestimonialLayoutGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
  align-items: center;
`
const Frame = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  float: ${props => props.float || 'unset'};
  overflow: ${props => props.overflow || 'unset'};
`
const ImageLeft = styled.img`
  width: 500px;

  animation: ${SlideFromLeft} 1s ease-out forwards;
`
const ImageRight = styled.img`
  min-height: 100%;
  min-width: 1200px;
  width: 100%;
  height: auto;

  animation: ${SlideFromLeft} 1s ease-out forwards;
`
const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  max-height: 700px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.2;
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />

      {/* Hero */}
      <HeroSection>
        <div>
          <Title>
            <Text type="h1" weight="bold" color="secondary">
              Me Wines Shop
            </Text>
          </Title>
          <div>
            <HeroL>
              <Frame width="100%">
                <Frame
                  width="400px"
                  height="400px"
                  float="right"
                  overflow="hidden"
                >
                  <ImageWrapper>
                    <ImageLeft src={HeroLeft} />
                  </ImageWrapper>
                </Frame>
              </Frame>
            </HeroL>
            <Frame width="55%" float="left" overflow="hidden">
              <ImageWrapper>
                <ImageRight src={HeroRight} />
              </ImageWrapper>
            </Frame>
          </div>
        </div>
      </HeroSection>

      {/* Product */}
      <ProductSection>
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
                <BlogSpot src={Spot06} />
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
