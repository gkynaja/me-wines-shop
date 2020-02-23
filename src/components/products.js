import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Container from './container'

const Content = styled.div`
  padding: 5rem 0;
`
const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
`
const ProductCard = styled.div`
  height: 400px;
`
const ProductImage = styled.div`
  height: 60%;
  img {
    width: 100%;
  }
`
const ProductContent = styled.div`
  height: 40%;
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: uppercase;

  p {
    color: #9f2348;
    font-weight: bold;
  }
`
const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  letter-spacing: 2px;

  a {
    font-size: .8rem;
    font-weight: bold;
    color: #9f2348;
  }
`

const Products = props => {
  const data = useStaticQuery(graphql`
    query ProductsQuery {
      allFile(filter: {sourceInstanceName: {eq: "products"}}) {
        edges {
          node {
            sourceInstanceName
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                name
                price
                featuredImage
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Content>
      <Container>
        <Header>
          <h2>OUR WINES</h2>
          <Link to='/'>SEE ALL</Link>
        </Header>
        <ProductsWrapper>
          {
            data.allFile.edges.map(({ node }, idx) => {
              console.log(node.childMarkdownRemark.frontmatter.featuredImage)
              return (
                <ProductCard key={node.childMarkdownRemark.id}>
                  <ProductImage>
                    <img src={require(`../images/${node.childMarkdownRemark.frontmatter.featuredImage}`)} />
                  </ProductImage>
                  <ProductContent>
                    <Link to={`/${node.sourceInstanceName}/${node.childMarkdownRemark.fields.slug}`}><h4>{node.childMarkdownRemark.frontmatter.name}</h4></Link>
                    <p>{node.childMarkdownRemark.frontmatter.price} THB</p>
                  </ProductContent>
                </ProductCard>
              )
            })
          }
        </ProductsWrapper>
      </Container>
    </Content>
  )
}

export default Products