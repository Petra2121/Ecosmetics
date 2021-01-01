import React from 'react'
import styles from './style.module.css'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from 'gatsby'

// import image1 from '../../images/strawberry-shampoo1.jpg'
// import image2 from '../../images/strawberry-shampoo2.jpg'
// import image3 from '../../images/strawberry-shampoo3.jpg'

// const detailsText = `Feed dull hair with our Strawberry Clearly Glossing Shampoo. 
// Enriched with mouth-watering Italian strawberries,
//  the silicone-free, 100% vegan formula adds shine and 
//  helps detangle for soft, sweet-smelling locks all day long.`

// const ingredientsText = `Aqua/Water/Eau, Sodium Laureth Sulfate, Citric Acid, 
// Cocamidopropyl Betaine, Ammonium Hydroxide, Sodium Chloride, Propylene Glycol, 
// Parfum/Fragrance, Sodium Benzoate, Hexylene Glycol, `

const OneProduct = () => {

  const data = useStaticQuery(graphql`
  query ClickedProduct {
    allProductsJson(filter: {name: {eq: "Strawberry shower gel"}, img: {name: {eq: "strawberry-shampoo1"}}}) {
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
    <div className={styles.wrapper}>
    <div className={styles.maindiv}>
      <div className={styles.twopictures}>
        {/* <img src={image2} className={styles.img2} />
        <img src={image3} className={styles.img3}/> */}

        <Img key={index}
          className={styles.img2}
          src={item.node.img2.childImageSharp.fluid.src}
          alt={item.node.alt}
          fluid={item.node.img2.childImageSharp.fluid}
          />
        
        <Img key={index}
          className={styles.img3}
          src={item.node.img3.childImageSharp.fluid.src}
          alt={item.node.alt}
          fluid={item.node.img3.childImageSharp.fluid}
          />

      </div>

      <div className={styles.rightpicture}>
      <Img key={index}
          className={styles.img1}
          src={item.node.img.childImageSharp.fluid.src}
          alt={item.node.alt}
          fluid={item.node.img.childImageSharp.fluid}
          />
        {/* <img src={image1} className={styles.img1} /> */}
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

