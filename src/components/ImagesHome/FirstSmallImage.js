import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FirstSmallImage = () => {
  const data = useStaticQuery(graphql`
  query {
    myImage: file(relativePath: { eq: "home-small-imgL.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
 return (
     <Img
        style={{maxWidth: "800px", minWidth: "300px"}}
        fluid={data.myImage.childImageSharp.fluid}>
     </Img>
 )
}

export default FirstSmallImage