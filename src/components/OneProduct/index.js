import React from 'react'
import styles from './style.module.css'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OneProduct = () => {

  const data = useStaticQuery(graphql`
  query ClickedProduct {
    allProductsJson(filter: {name: {eq: "Strawberry shower gel"}}) {
      edges {
        node {
          alt
          category
          img {
            childImageSharp {
              fluid (maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img2 {
            childImageSharp {
              fluid (maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img3 {
            childImageSharp {
              fluid (maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          price
          details
          ingredients
        }
      }
    }
  }
`)

  return (
    <div className={styles.adjHeight}>
      {data.allProductsJson.edges.map((item, index) => (
        <div className={styles.wrapper} key={item.node.name}>
          <div className={styles.maindiv}>
            <div className={styles.pictures}>
              <div className={styles.twopictures}>
                <Img key={index}
                  className={styles.img2}
                  src={item.node.img2.childImageSharp.fluid.src}
                  alt={item.node.alt}
                  fluid={item.node.img2.childImageSharp.fluid}
                />
        
                <Img key={index+1}
                  className={styles.img3}
                  src={item.node.img3.childImageSharp.fluid.src}
                  alt={item.node.alt}
                  fluid={item.node.img3.childImageSharp.fluid}
                />
              </div>

              <div className={styles.rightpicture}>
                <Img key={index+2}
                  className={styles.img1}
                  src={item.node.img.childImageSharp.fluid.src}
                  alt={item.node.alt}
                  fluid={item.node.img.childImageSharp.fluid}
                />
              </div>
            </div>

            <div className={styles.informationpart}>
              <span className={styles.name}>{item.node.name}</span>
              <span className={styles.number}>{item.node.price}$</span>
              <button className={styles.button}>Add to bag</button>
            </div>

          </div>

          <div  className={styles.about}>
            <div  className={styles.details}>
              <span className={styles.heading}>Details</span>
              <div className={styles.text}>{item.node.details}</div>
            </div>

            <div  className={styles.ingredients}>
              <span className={styles.heading}>Ingredients</span>
              <div className={styles.text}>{item.node.ingredients}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) 
}

export default OneProduct