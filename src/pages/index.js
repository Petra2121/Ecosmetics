import React from "react"
import HeroImage from "../modules/HeroImage"
import OurProducts from "../modules/OurProducts"
import HeaderFooterLayout from "../layouts/headerFooter"
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <HeroImage/>
    <OurProducts/>
  </HeaderFooterLayout>
)
 
export default IndexPage