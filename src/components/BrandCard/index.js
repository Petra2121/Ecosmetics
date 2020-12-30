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
            name
            alt
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

    <div className={styles.brandCard}>

      <Img key={index}
              className={styles.img1}
              src={item.node.img1.childImageSharp.fluid.src}
              alt={item.node.alt}
              fluid={item.node.img1.childImageSharp.fluid}
      />
      <Img key={index}
              className={styles.img2}
              src={item.node.img2.childImageSharp.fluid.src}
              alt={item.node.alt}
              fluid={item.node.img2.childImageSharp.fluid}
      />
     
      <span className={styles.brandName}>{item.node.name}</span>
      <Link to="/brand">
        <button>Check out the brand</button>
      </Link>

      <hr className={styles.line}></hr>
    </div>
     ))}
  </section>

    )

}

export default BrandCard

// const BrandCard = ({image1, image2, name}) => (

//   <section className={styles.brandSection}>

//     <div className={styles.brandCard}>

//       <div className={styles.imgContainer}>
//         <img src={image1} className={styles.img1} />
//         <img src={image2} className={styles.img2}/>
//       </div>
    
//       <span className={styles.brandName}>{name}</span>
//       <Link to="/brand">
//         <button>Check out the brand</button>
//       </Link>

//       <hr className={styles.line}></hr>
//     </div>

//   </section>
// )

// export default BrandCard