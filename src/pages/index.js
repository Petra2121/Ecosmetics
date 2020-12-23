import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import HeroImage from "../modules/HeroImage"
import Bestsellers from '../modules/Bestsellers'
import OurProducts from "../modules/OurProducts"

 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <HeroImage/>
    <Bestsellers/>    
    <OurProducts/>
  </HeaderFooterLayout>
)
 
export default IndexPage