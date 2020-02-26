import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"


const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />

      <Hero />



    </Layout>
  )
}

// export const query = graphql`
//   query {
//     products: allFile(filter: {sourceInstanceName: {eq: "products"}}) {
//       edges {
//         node {
//           childMarkdownRemark {
//             id
//             frontmatter {
//               name
//               price

//             }
//           }
//         }
//       }
//     }
//     events: allFile(filter: {sourceInstanceName: {eq: "events"}}) {
//       edges {
//         node {
//           childMarkdownRemark {
//             id
//             frontmatter {
//               title
//               place

//             }
//           }
//         }
//       }
//     }
//   }
// `

export default IndexPage
