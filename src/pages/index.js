import React from "react"
import HeroImage from "../components/HeroImage"
 
import HeaderFooterLayout from "../layouts/headerFooter"
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <HeroImage/>
  </HeaderFooterLayout>
)
 
export default IndexPage