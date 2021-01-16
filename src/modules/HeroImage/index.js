import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Link } from 'gatsby'

import styles from './style.module.css'
 
const text = `
We believe in natural and organic products that cater to the 
largest organ in the human body - our skin. Our mission is to empower 
you to give your body the care it deserves.`

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
                <p>&#8195;&#8195;{text}</p>
                <Link to="/products">
                     <button className={styles.btn}>Shop now</button>
                </Link>
            </div>
        </BackgroundImage>
)
    }
 
export default HeroImage