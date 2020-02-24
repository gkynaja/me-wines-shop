const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { collections } = require('./src/config/collections-config.json')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const collection = getNode(node.parent).sourceInstanceName
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: `collection`,
      value: collection,
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query AllMarkdownQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              collection
              slug
            }
          }
        }
      }
    }
  `)

  collections.forEach(({ name }) => {
    const filterEdges = data.allMarkdownRemark.edges.filter(({ node }) => node.fields.collection === name)

    // Create post pages
    filterEdges.forEach(({ node }) => {
      const { slug, collection } = node.fields
      createPage({
        path: `/${collection}${slug}`,
        component: path.resolve(`./src/templates/${name}.js`),
        context: {
          collection,
          slug
        }
      })
    })

    // Create list page
    createPage({
      path: `/${name}s`,
      component: path.resolve(`./src/templates/${name}s.js`)
    })
  })
}