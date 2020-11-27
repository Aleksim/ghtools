const path = require('path')

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
        tag: allAirtable {
            distinct(field: data___tags)
        }
    }
  `)

  result.data.tag.distinct.forEach((tags)=>{
    createPage({
    path:`/${tags}`,
    component:path.resolve(`src/templates/category-template.js`),
    context:{
        tags,
    },
    })
  })
}