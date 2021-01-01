import React from 'react'
import styles from './style.module.css'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BrandIntroduction = () => {

  const data = useStaticQuery(graphql`
  query ClickedBrand {
    allBrandsJson(filter: {name: {eq: "Fat and the moon"}}) {
      edges {
        node {
          name
          alt
          img3 {
            childImageSharp {
              fluid (maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img4 {
            childImageSharp {
              fluid (maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img5 {
            childImageSharp {
              fluid (maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text1
          text2
        }
      }
    }
  }
`)

return (

  <div className={styles.adjHeight}>
  {data.allBrandsJson.edges.map((item, index) => (

  <div className={styles.wrapper}>
    <section className={styles.brandIntro}>
      <span className={styles.headingText}>{item.node.name}</span>
      <span className={styles.smallText1}>{item.node.text1}</span>
      <span className={styles.smallText2}>{item.node.text2}</span>
    </section>
    <div className={styles.threeImages}>
      <Img key={index}
        className={styles.img3}
        src={item.node.img3.childImageSharp.fluid.src}
        alt={item.node.alt}
        fluid={item.node.img3.childImageSharp.fluid}
      />
      
      <Img key={index}
        className={styles.img4}
        src={item.node.img4.childImageSharp.fluid.src}
        alt={item.node.alt}
        fluid={item.node.img4.childImageSharp.fluid}
      />

      <Img key={index}
        className={styles.img5}
        src={item.node.img5.childImageSharp.fluid.src}
        alt={item.node.alt}
        fluid={item.node.img5.childImageSharp.fluid}
      />
    </div>

  </div>
  ))}
  </div>
)

}

export default BrandIntroduction