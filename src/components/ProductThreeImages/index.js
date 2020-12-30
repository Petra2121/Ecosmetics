import React from 'react'
import styles from './style.module.css'

import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import { Link } from 'gatsby'

import image1 from '../../images/strawberry-shampoo1.jpg'
import image2 from '../../images/strawberry-shampoo2.jpg'
import image3 from '../../images/strawberry-shampoo3.jpg'

const detailsText = `Feed dull hair with our Strawberry Clearly Glossing Shampoo. 
Enriched with mouth-watering Italian strawberries,
 the silicone-free, 100% vegan formula adds shine and 
 helps detangle for soft, sweet-smelling locks all day long.`

const ingredientsText = `Aqua/Water/Eau, Sodium Laureth Sulfate, Citric Acid, 
Cocamidopropyl Betaine, Ammonium Hydroxide, Sodium Chloride, Propylene Glycol, 
Parfum/Fragrance, Sodium Benzoate, Hexylene Glycol, `

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
    <div className={styles.wrapper}>
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

    <div  className={styles.about}>
      <div  className={styles.details}>
        <span className={styles.heading}>Details</span>
        <block className={styles.text}>{detailsText}</block>
      </div>

      <div  className={styles.ingredients}>
        <span className={styles.heading}>Ingredients</span>
        <block className={styles.text}>{ingredientsText}</block>
      </div>
    </div>

    </div>
  )
  
}
  export default ProductThreeImages

