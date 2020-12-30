import React from 'react'
import styles from './style.module.css'

import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import { Link } from 'gatsby'

import image1 from '../../images/strawberry-shampoo1.jpg'
import image2 from '../../images/strawberry-shampoo2.jpg'
import image3 from '../../images/strawberry-shampoo3.jpg'

const ProductThreeImages = () => {
  const data = useStaticQuery(graphql`
    query ClickedProduct {
      productsJson(name: {eq: "Strawberry shower gel"}) {
        alt
        category
        details
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
        ingredients
        name
        price
      }
    }    
    
  `)

  return (
    <div className={styles.maindiv}>
      <div className={styles.twopictures}>
        <img src={image2} className={styles.img2} />
        <img src={image3} className={styles.img3}/>
      </div>

      <div className={styles.rightpicture}>
        <img src={image1} className={styles.img1} />
      </div>

      <div className={styles.informationpart}>
        <span className={styles.name}>Strawberry shower gel</span>
        <span className={styles.number}>16$</span>
        <button className={styles.button}>Add to bag</button>
      </div>

    </div>
  )
  
}
  export default ProductThreeImages

