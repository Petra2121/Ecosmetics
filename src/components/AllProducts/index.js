import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AllProducts = ({imageName}) => {
    const data = useStaticQuery(graphql`
    query AllPhotos {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}
      name:{nin:["gatsby-icon", "vegan", "hero-image"]}
    }) {
        edges {
          node {
            childImageSharp {
              fixed (width: 250) {
                originalName,
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return(
      <div>
          {data.allFile.edges.map((image, key) => (
              <Img key={key}
              className={styles.producsImg}
              fixed={image.node.childImageSharp.fixed}
              />
          ))}
      </div>
  )
}

export default AllProducts