import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
 
const SecondSmallImage = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "home-small-imgR.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
   return (
    <div style={{maxWidth: "800px", minWidth: "300px"}}> 
      <Img fluid={data.myImage.childImageSharp.fluid} />
    </div>
   )
}
 
export default SecondSmallImage