import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from './style.module.css'
 
const HeroImage = () => {
    const data = useStaticQuery(graphql`
    query{
        desktop: file(relativePath: {eq: "hero-image.jpg"}) {
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
        className={styles.heroImage}
        fluid={data.desktop.childImageSharp.fluid}
        backgroundColor={`#040e18`}
        >
            <div>
                <p>Ovdi ce ic onaj tekst priko slike</p>
            </div>
        </BackgroundImage>
)
    }
 
export default HeroImage