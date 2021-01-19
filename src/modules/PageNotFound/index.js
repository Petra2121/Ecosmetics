import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Link } from 'gatsby'

const textToDisplay = `
Where did our products go?!`

const errorMessage = `
Unfortunately the page you tried to reach doesn't exist!`

const NotFound = () => {

    const data = useStaticQuery(graphql`
    query{
        desktop: file(relativePath: {eq: "pagenotfound.jpeg"}) {
            childImageSharp{
                fluid(quality: 90, maxWidth: 1920){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    `)

    return(

    <BackgroundImage
    Tag="section"
    className={styles.heroImage}
    fluid={data.desktop.childImageSharp.fluid}
    backgroundColor={`#040e18`}
    >
    <section className={styles.wrapper}>
        <span className={styles.text1}>Oh NO!</span>
        <span className={styles.text1}>{textToDisplay}</span>
        <span className={styles.text1}>404</span>
        <span className={styles.text2}>{errorMessage}</span>
        <Link to="/products" className={styles.btn}>Continue shopping
        </Link>
    </section>
    </BackgroundImage>
    )

}
 
export default NotFound