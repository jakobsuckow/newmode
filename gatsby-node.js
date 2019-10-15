const { slugify } = require('./src/helpers')
const path = require('path');

module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions
  if (node.internal.type === "Airtable") {
    // console.log(JSON.stringify(node, undefined, 4))
    const slug = slugify(node.data.Name)
    const name = node.data.Name
    createNodeField({
      node,
      slug: slug,
      name: name
    })

  }
}

module.exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const template = path.resolve('src/templates/postTemplate.js')
  const res = await graphql(`
  query templateQuery {
    allAirtable {
      edges {
        node {
          data {
            Name
          }
        }
      }
    }
  }
  
  
  `)
  res.data.allAirtable.edges.forEach((edge) => {
    createPage({
      component: template,
      path: `/posts/${slugify(edge.node.data.Name)}`,
      context: {
        name: edge.node.data.Name,
      }

    })
  })
}
