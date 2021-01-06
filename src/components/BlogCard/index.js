import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Post from "../Post"
// import { Link } from 'gatsby'

// import { GoChevronLeft } from "@react-icons/all-files/go/GoChevronLeft";
// import { GoChevronRight } from "@react-icons/all-files/go/GoChevronRight";

const BlogCard = () => {
  const data = useStaticQuery(graphql`
  query blogCards {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "D. MM. YYYY.")
            author
            path
            image{
              childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
  `)

  return(
    <div className={styles.blogGrid}>
      {/* <GoChevronLeft className={styles.icon1}/> */}
      {data.allMarkdownRemark.edges.map(({node}) => (

        <Post 
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          path={node.frontmatter.path}
          date={node.frontmatter.date}
          body={node.excerpt}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />

      ))}
    {/* <GoChevronRight className={styles.icon2}/> */}
    </div>
  )
}


export default BlogCard
