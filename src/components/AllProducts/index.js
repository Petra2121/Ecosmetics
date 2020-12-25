import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AllProducts = ({imageName}) => {
    const data = useStaticQuery(graphql`
    query AllPhotos {
      allFile(filter: {extension: 
        {regex: "/(jpg)|(jpeg)|(png)/"}
      name:{nin:["gatsby-icon", "vegan", "hero-image"]
      
                      }
    }) {
        edges {
          node {
            childImageSharp {
              fluid (maxWidth: 250) {
                originalName,
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return(
      <div className={styles.productGrid}>
          {data.allFile.edges.map((image, key) => (
            <div className={styles.productCard}>

              <div className={styles.productImg}>
                <Img key={key}
                className={styles.producsImg}
                fluid={image.node.childImageSharp.fluid}
                objectPosition="30% 70%"
                />
              </div>

              <div className={styles.cardBottom}>
                <span className={styles.productName}>Strawberry glossing shampoo</span>
                <span className={styles.productPrice}>16 $</span>
                <button>Shop now</button>
              </div>
            </div>
          ))}
      </div>
  )
}

export default AllProducts