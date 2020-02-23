import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Container from './container'

const Content = styled.div`
  padding: 5rem 0 6rem 0;
  background-color: cornsilk;
`
const EventsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const EventCard = styled.div`
  position: relative;
  flex: 1;
  height: 400px;
  background: ${props => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  text-transform: uppercase;
  color: white;

  a {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    max-width: 60%;
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
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(18deg, rgba(0,0,0,0.8085609243697479) 0%, rgba(0,0,0,0) 45%, rgba(0,212,255,0) 100%);;
`
const Events = props => {
  const data = useStaticQuery(graphql`
    query EventsQuery {
      allFile(filter: {sourceInstanceName: {eq: "events"}}) {
        edges {
          node {
            sourceInstanceName
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
                place
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
      <Header>
        <h2>OUR EVENTS</h2>
        <Link to='/'>SEE ALL</Link>
      </Header>
      <Container>
        <EventsWrapper>
          {
            data.allFile.edges.map(({ node }, idx) => {
              return (
                <EventCard key={node.childMarkdownRemark.id} src={require(`../images/${node.childMarkdownRemark.frontmatter.featuredImage}`)}>
                  <Overlay />
                  <Link to={`/${node.sourceInstanceName}/${node.childMarkdownRemark.fields.slug}`}><h2>{node.childMarkdownRemark.frontmatter.title}</h2></Link>
                </EventCard>
              )
            })
          }
        </EventsWrapper>
      </Container>
    </Content >
  )
}

export default Events