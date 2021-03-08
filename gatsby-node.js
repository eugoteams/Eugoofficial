/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
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

//   const path = require(`path`);

//   // Creating Dynamic pages For Articles

// const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
//   // Query for nodes to use in creating pages.
//   resolve(
//     graphql(request).then(result => {
//       if (result.errors) {
//         reject(result.errors)
//       }
      
//       return result;
//     })
//   )
// });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;
  
//   const getArticles = makeRequest(graphql, `
//     {
//       allStrapiArticle {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//     `).then(result => {
//     // Create pages for each article.
//     result.data.allStrapiArticle.edges.forEach(({ node }) => {
//       createPage({
//         path: `/${node.id}`,
//         component: path.resolve(`src/templates/article.js`),
//         context: {
//           id: node.id,
//         },
//       })
//     })
//   });
  
//   // Query for articles nodes to use in creating pages.
//   return getArticles;
// };