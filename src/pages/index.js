import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import HeroImage from "../modules/HeroImage"
import OurProducts from "../modules/OurProducts"
import SmallImagesHome from "../modules/SmallImagesHome"
import NewBestsellers from "../modules/NewBestsellers"

 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <HeroImage/>
    <NewBestsellers />
    <SmallImagesHome/>
    <OurProducts/>
  </HeaderFooterLayout>
)
 
export default IndexPage