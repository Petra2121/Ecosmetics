import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby'


const BrandCard = () => {
  const data = useStaticQuery(graphql`
    query AllBrands {
      allBrandsJson {
        edges {
          node {
            btn
            name
            alt
            text3
            text4
            text5
            img1 {
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
          }
        }
      }
    }
  `)
  

  return(
    <section className={styles.brandSection}>
      {data.allBrandsJson.edges.map((item, index) => (
        <div className={styles.brandCard} key={item.node.name}>
          <Img key={index}
            className={styles.img1}
            src={item.node.img1.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img1.childImageSharp.fluid}
          />
          <Img key={index+1}
            className={styles.img2}
            src={item.node.img2.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img2.childImageSharp.fluid}
          />

          <span className={styles.brandName}>{item.node.name}</span>
          <Link to={`/brand?btn=${item.node.btn}`}>
            <button>Check out the brand</button>
          </Link>
          <hr className={styles.line}></hr>
        </div>
      ))}
    </section>
  )
}

export default BrandCard