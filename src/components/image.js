import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "images/hero-image.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1990) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allFile(filter: {sourceInstanceName: {eq: "img"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1990) {
                ...GatsbyImageSharpFluid
              }
            }
            relativePath
          }
        }
      }
    }
  `)
  // const fluid = data.placeholderImage.edges.find(({ node }) => node.relativePath === props.src).node.childImageSharp.fluid
  // console.log(fluid)
  return <Img fluid={data.placeholderImage.edges.find(({ node }) => node.relativePath === props.src).node.childImageSharp.fluid} />
}

export default Image