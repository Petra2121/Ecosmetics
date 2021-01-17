import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby'

const AllProducts = ({appliedFilters, sort}) => {
  console.log("AllProducts", appliedFilters)

  for (var i=0; i<appliedFilters.length; i++){
    console.log(appliedFilters[i])
  }

  const data = useStaticQuery(graphql`
    query AllProductsQ {
      allProductsJson {
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
            btn
          }
        }
      }
    }
  `)

  const originalArray = data.allProductsJson.edges
  let dataArray = [...data.allProductsJson.edges]
  if (sort) {
    switch (sort) {
      case "ASC":
        console.log(sort)
        dataArray = dataArray.sort((el1, el2) => el1.node.price - el2.node.price)
        break
      case "DEC":
        dataArray = dataArray.sort((el1, el2) => el2.node.price - el1.node.price)
        break
    }
  } else {
    console.log(sort)
    dataArray = [...originalArray]
  }

  return(
    <div className={styles.productGrid}>
      {dataArray.map((item, index) => appliedFilters.includes(item.node.category) ? (
        <div className={styles.productCard}>

          <div className={styles.productImg}>
            <Img key={index}
              className={styles.img}
              src={item.node.img.childImageSharp.fluid.src}
              alt={item.node.alt}
              fluid={item.node.img.childImageSharp.fluid}
            />
          </div>

          <div className={styles.cardBottom}>
            <span className={styles.productName}>
              {item.node.name}
            </span>
            <span className={styles.productPrice}>{item.node.price} $</span>
            <Link to={`/product?btn=${item.node.btn}`}>
              <button className={styles.btn}>Shop now</button>
            </Link>
          </div>
        </div>
      ) : null)}
    </div>
  )
}


export default AllProducts