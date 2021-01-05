import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import HeroImageBrands from "../modules/HeroImageBrands"
import MeetBrands from "../components/MeetOurBrands"
import BrandCard from "../components/BrandCard"
 
const BrandsPage = () => (
    <HeaderFooterLayout activeTab="Brands">
        <HeroImageBrands/>
        <MeetBrands />
        <BrandCard />
    </HeaderFooterLayout>
)
 
export default BrandsPage