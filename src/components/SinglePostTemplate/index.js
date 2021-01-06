import React from 'react'
import styles from './style.module.css'
import Img from "gatsby-image"
import { graphql } from 'gatsby'
import HeaderFooterLayout from "../../layouts/headerFooter"
 

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter
    return (
        <HeaderFooterLayout activeTab="Blog">
        <div  className={styles.wrapper}>
            <Img 
                className={styles.blogImg}
                fluid={post.image.childImageSharp.fluid}/>
            <span className={styles.headingText}>{post.title}</span>
            <div className={styles.smallText} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
            <span className={styles.smallText1}>{post.author}</span>
            <span className={styles.smallText1}>{post.date}</span>
        </div>
        </HeaderFooterLayout>
        
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug }}){
            id
            html
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
            }
        }
    }
`

export default SinglePost