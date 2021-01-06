import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from './style.module.css'
 
const text = `
In 2020, eyeshadow sales are soaring`

const HeroImageBlogpost = () => {
    const data = useStaticQuery(graphql`
    query{
        desktop: file(relativePath: {eq: "hero-image-blogpost.jpg"}) {
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
        className={styles.heroImageBlogpost}
        fluid={data.desktop.childImageSharp.fluid}
        backgroundColor={`#040e18`}
        >
            <div>
                <p>{text}</p>
            </div>
        </BackgroundImage>
)
    }
 
export default HeroImageBlogpost