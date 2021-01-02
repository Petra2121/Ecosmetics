import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby'

// import { GoChevronLeft } from "@react-icons/all-files/go/GoChevronLeft";
// import { GoChevronRight } from "@react-icons/all-files/go/GoChevronRight";

const BlogCard = () => {
  const data = useStaticQuery(graphql`
    query AllBlogs {
      allBlogsJson {
        edges {
          node {
            img1 {
              childImageSharp {
                fluid (maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            alt
            author
          }
        }
      }
    }
  `)

  return(
    <div className={styles.blogGrid}>
      {/* <GoChevronLeft className={styles.icon1}/> */}
      {data.allBlogsJson.edges.map((item, index) => (
        <Link to="/topic">
        <div className={styles.blogCard}>

         <Img key={index}
            className={styles.blogImg}
            src={item.node.img1.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img1.childImageSharp.fluid}
         />

          <div className={styles.cardBottom}>
            <span className={styles.blogName}>{item.node.name}</span>
            <hr className={styles.line}></hr>
            <span className={styles.blogAuthor}>Author: {item.node.author}</span>
          </div>

        </div>
        </Link>
      ))}
    {/* <GoChevronRight className={styles.icon2}/> */}
    </div>
  )
}


export default BlogCard
