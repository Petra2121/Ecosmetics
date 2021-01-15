import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby'

const AllProducts = () => {
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
          }
        }
      }
    }
  `)

  return(
    <div className={styles.productGrid}>
      {data.allProductsJson.edges.map((item, index) => (
        <div className={styles.productCard} key={item.node.name}>

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
            <Link to="/product">
              <button>Shop now</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}


export default AllProducts


// return(
//   <div className={styles.productGrid}>
//       {data.allFile.edges.map((image, key) => (
//         <div className={styles.productCard}>

//           <div className={styles.productImg}>
//             <Img key={key}
//             className={styles.producsImg}
//             fluid={image.node.childImageSharp.fluid}
//             objectPosition="30% 70%"
//             />
//           </div>

//           <div className={styles.cardBottom}>
//             <span className={styles.productName}>Strawberry glossing shampoo</span>
//             <span className={styles.productPrice}>16 $</span>
//             <button>Shop now</button>
//           </div>
//         </div>
//       ))}
//   </div>
// )

    // query AllProducts {
    //   allProductsJson(filter: {extension: 
    //     {regex: "/(jpg)|(jpeg)|(png)/"}
    //     name:{regex: "/shampoo1|conditioner1/"}
     
    // }) {
    //     edges {
    //       node {
    //         childImageSharp {
    //           fluid (maxWidth: 250) {
    //             originalName,
    //             ...GatsbyImageSharpFluid
    //           }
    //         }
    //       }
    //     }
    //   }

      // function getProducts(data) {
  //   const productsArray = []
    
  //   data.allProductsJson.edges.array.forEach((item, index) => {
  //     productsArray.push(
  //       <div key={index}>
  //         <Img src={item.node.img.childImageSharp.fluid.src}
  //         fluid={item.node.img.childImageSharp.fluid} />
  //       </div>
  //     )
      
  //   });

  //   return productsArray
  // }
