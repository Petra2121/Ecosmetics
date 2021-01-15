import React from 'react'
import styles from './style.module.css'
import Post from '../Post'
import { graphql } from 'gatsby'
import HeaderFooterLayout from "../../layouts/headerFooter"
import PaginationLinks from '../PaginationLinks'
import BlogIntroduction from "../../modules/BlogIntroduction"
import HeroImageBlog from "../../modules/HeroImageBlog"

const postList = (props) => {
    const posts = props.data.allMarkdownRemark.edges
    const { currentPage, numberOfPages } = props.pageContext
    // console.log(props.pageContext)
    return(
        <HeaderFooterLayout activeTab="Blog">
            <HeroImageBlog/>
            <BlogIntroduction />
            <div className={styles.blogGrid}>
                {posts.map(({node}) => (
                    <Post 
                        key={node.id}
                        title={node.frontmatter.title}
                        author={node.frontmatter.author}
                        slug={node.fields.slug}
                        date={node.frontmatter.date}
                        body={node.excerpt}
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                ))}
            </div>
            <div className={styles.links}>
                <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages}></PaginationLinks>
            </div>
        </HeaderFooterLayout>
    )
}

export const postListQuery = graphql`
    query postListQuery($skip: Int!, $limit: Int!){
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC},
            limit: $limit,
            skip: $skip
        ){
            edges{
                node{
                    id
                    frontmatter{
                        title
                        author
                        date(formatString: "DD. MM. YYYY.")
                        image{
                            childImageSharp{
                            fluid(maxWidth: 700){
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        image1{
                            childImageSharp{
                              fluid(quality: 90, maxWidth: 1920){
                                ...GatsbyImageSharpFluid_withWebp
                              }
                            }
                        }
                        image2{
                            childImageSharp{
                            fluid(maxWidth: 700){
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        image3{
                            childImageSharp{
                            fluid(maxWidth: 700){
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        image4{
                            childImageSharp{
                            fluid(maxWidth: 700){
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        image5{
                            childImageSharp{
                            fluid(maxWidth: 700){
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`

export default postList