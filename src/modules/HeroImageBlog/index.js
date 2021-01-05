import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from './style.module.css'

const HeroImageBlog = () => {
    const data = useStaticQuery(graphql`
    query{
        desktop: file(relativePath: {eq: "home-small-imgR.jpg"}) {
            childImageSharp{
                fluid(quality: 90, maxWidth: 1920){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    `)
    return (
        <BackgroundImage
        Tag="section"
        className={styles.heroImageBlog}
        fluid={data.desktop.childImageSharp.fluid}
        backgroundColor={`#040e18`}
        >
        </BackgroundImage>
)
    }
 
export default HeroImageBlog