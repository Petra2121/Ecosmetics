import React from 'react'
import styles from './style.module.css'
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { graphql } from 'gatsby'
import HeaderFooterLayout from "../../layouts/headerFooter"
import SEO from "../seo"

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter
    return (
        <HeaderFooterLayout activeTab="Blog">
            <SEO title="Beauty Blog"
                 description="We want to educate you also and hear your opinions, be free to leave any feedback."
                 keywords="beauty, cosmetics, eco, eco-friendly, skin, nature, care, sustainable, organic, makeup, products, face, natural, palm-oil, hair, shampoo, shower gel, soap, cream, conditioner, blush, lipstick, hair, vacation, dementia, washing, skin care, wardrobe"
            />
        <div  className={styles.wrapper}>
            <BackgroundImage
                className={styles.heroImage}
                fluid={post.image1.childImageSharp.fluid}>
            </BackgroundImage>
            <span className={styles.headingText}>{post.title}</span>
            <div className={styles.smallText} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
            <span className={styles.smallText1}>{post.author}</span>
            <span className={styles.smallText1}>{post.date}</span>
            <div className={styles.imageContainer}>
            <Img className={styles.blogImg1} fluid={post.image2.childImageSharp.fluid}/>
            <Img className={styles.blogImg2} fluid={post.image3.childImageSharp.fluid}/>
            <Img className={styles.blogImg1} fluid={post.image4.childImageSharp.fluid}/>
            <Img className={styles.blogImg2} fluid={post.image5.childImageSharp.fluid}/>
            </div>
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
        }
    }
`

export default SinglePost