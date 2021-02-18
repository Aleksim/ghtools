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

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}