import React from 'react'
import styles from './style.module.css'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BrandSpecifics = () => {

  const data = useStaticQuery(graphql`
  query ClickedBrandSpecifics {
    allBrandsJson(filter: {name: {eq: "Fat and the moon"}}) {
      edges {
        node {
          name
          alt
          img6 {
            childImageSharp {
              fluid (maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img7 {
            childImageSharp {
              fluid (maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text3
          text4
          text5
        }
      }
    }
  }
`)

return (

  <div className={styles.adjHeight}>
  {data.allBrandsJson.edges.map((item, index) => (

  <div className={styles.wrapper}>

    <div className={styles.images}>
      <Img key={index}
        className={styles.img6}
        src={item.node.img6.childImageSharp.fluid.src}
        alt={item.node.alt}
        fluid={item.node.img6.childImageSharp.fluid}
      />
    </div>

    <div className={styles.threeParagraphs}>
        <span className={styles.smallText}>{item.node.text3}</span>
        <hr className={styles.line}></hr>
        <span className={styles.smallText}>{item.node.text4}</span>
        <hr className={styles.line}></hr>
        <span className={styles.smallText}>{item.node.text5}</span>
    </div>

    <div className={styles.images}>
      <Img key={index}
        className={styles.img7}
        src={item.node.img7.childImageSharp.fluid.src}
        alt={item.node.alt}
        fluid={item.node.img7.childImageSharp.fluid}
      />
    </div>

  </div>
  ))}
  </div>
)

}

export default BrandSpecifics