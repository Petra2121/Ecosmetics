import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Post from "../Post"
import PaginationLinks from '../PaginationLinks'


const BlogCard = () => {
  const data = useStaticQuery(graphql`
  query blogCards {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}
      limit: 2) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD. MM. YYYY.")
            author
            image{
              childImageSharp{
                fluid(maxWidth: 600){
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
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
  `)

  const postsPerPage = 2;
  let numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)

  return(
    <div className={styles.wrapper}>
    <div className={styles.blogGrid}>
      {data.allMarkdownRemark.edges.map(({node}) => (
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
     <PaginationLinks currentPage={1} numberOfPages={numberOfPages}></PaginationLinks>
     </div>
    </div>
  )
}

export default BlogCard