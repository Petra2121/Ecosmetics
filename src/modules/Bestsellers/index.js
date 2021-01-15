import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby'


const NewBestsellers = () => {
  const data = useStaticQuery(graphql`
    query Bestsellers {
      allProductsJson(filter: {name: {regex: "/Strawberry shower gel|Banana truly nourishing hair mask|Pink grapefruit shower gel/"}}) {
        edges {
          node {
            img {
              childImageSharp {
                fluid (maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            btn
            name
            alt
            price
          }
        }
      }
    }
  `)

  return(
    <div className={styles.wrapper}>
      <span className={styles.headingText}>Bestsellers</span>
    <div className={styles.productGrid}>
      {data.allProductsJson.edges.map((item, index) => (
        <div className={styles.productCard} key={item.node.name}>

         <Img key={index}
            className={styles.productImg}
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
         />

          <div className={styles.cardBottom}>
            <span className={styles.productName}>{item.node.name}</span>
            <span className={styles.productPrice}>{item.node.price} $</span>
            <Link to={`/product?btn=${item.node.btn}`}>
              <button>Shop now</button>
            </Link> 
          </div>

        </div>
      ))}
    </div>
    </div>
  )
}


export default NewBestsellers