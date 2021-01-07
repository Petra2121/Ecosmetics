const { slugify } = require('./src/util/utility');
const path = require('path')

exports.onCreateNode = ({ node, actions })=> {
    const { createNodeField } = actions
    if(node.internal.type === 'MarkdownRemark'){
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: '/' + slugFromTitle
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const singlePostTemplate = path.resolve('./src/components/SinglePostTemplate/index.js')
    const listOfPostsTemplate = path.resolve('./src/components/PostList/index.js')

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            author
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    
    `).then(res => {
        if(res.errors) return Promise.reject(res.errors)

        const posts = res.data.allMarkdownRemark.edges

        posts.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: singlePostTemplate,
                context: {
                    //Passing slug for template to use to get post
                    slug: node.fields.slug
                }
            })
        })

       const postPerPage = 2
       const numberOfPages = Math.ceil(posts.length / postsPerPage)

       Array.from({ length: numberOfPages}).forEach(( _,index) => {
           const isFirstPage = index === 0
           const currentPage = index + 1

           if(isFirstPage) return

           createPage({
               path: `/page/${currentPage}`,
               component: listOfPostsTemplate,
               context: {
                   limit: postsPerPage,
                   skip: index * postsPerPage,
                   currentPage: currentPage
               }

           })
       })
    })
}