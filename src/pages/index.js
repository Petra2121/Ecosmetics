import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import HeroImage from "../modules/HeroImage"
import OurProducts from "../modules/OurProducts"
import SmallImagesHome from "../modules/SmallImagesHome"
import NewBestsellers from "../modules/NewBestsellers"
import SEO from "../components/seo"
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <SEO title="Ecosmetics"
         description="From make-up to skincare, here are the eco-friendly beauty products that every woman who wants to look flawless and save the world at the same time, needs to have on her radar..."
         keywords="shop, beauty, cosmetics, eco, eco-friendly, skin, nature, care, sustainable, organic, makeup, blog, brands, natural, palm-oil"
    />
    <HeroImage/>
    <NewBestsellers />
    <SmallImagesHome/>
    <OurProducts/>
  </HeaderFooterLayout>
)
 
export default IndexPage