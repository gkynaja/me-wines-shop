const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: 'data' })
    console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productsResult = await graphql(`
    query {
      allFile(filter: {sourceInstanceName: {eq: "products"}}) {
        edges {
          node {
            sourceInstanceName
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  const eventsResult = await graphql(`
    query {
      allFile(filter: {sourceInstanceName: {eq: "events"}}) {
        edges {
          node {
            sourceInstanceName
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

  productsResult.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `${node.sourceInstanceName}${node.childMarkdownRemark.fields.slug}`,
      component: path.resolve('./src/templates/product.js'),
      context: {
        slug: node.childMarkdownRemark.fields.slug
      },
    })
  })
  eventsResult.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `${node.sourceInstanceName}${node.childMarkdownRemark.fields.slug}`,
      component: path.resolve('./src/templates/product.js'),
      context: {
        slug: node.childMarkdownRemark.fields.slug
      },
    })
  })
}