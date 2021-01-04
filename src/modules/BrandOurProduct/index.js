import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby'


const BrandOurProduct = () => {
  const data = useStaticQuery(graphql`
    query BrandProducts {
      allBrandproductsJson {
        edges {
          node {
            img1 {
              childImageSharp {
                fluid (maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
      <span className={styles.headingText}>Our products</span>
    <div className={styles.productGrid}>
      {data.allBrandproductsJson.edges.map((item, index) => (
        <div className={styles.productCard}>

         <Img key={index}
            className={styles.productImg}
            src={item.node.img1.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img1.childImageSharp.fluid}
         />

          <div className={styles.cardBottom}>
            <span className={styles.productName}>{item.node.name}</span>
            <span className={styles.productPrice}>{item.node.price} $</span>
            <Link to="/product">
              <button>Shop now</button>
            </Link> 
          </div>

        </div>
      ))}
    </div>
    </div>
  )
}


export default BrandOurProduct