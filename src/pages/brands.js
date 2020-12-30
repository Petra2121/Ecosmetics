import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import MeetBrands from "../components/MeetOurBrands"
import BrandCard from "../components/BrandCard"
 
const BrandsPage = () => (
    <HeaderFooterLayout activeTab="Brands">
        <MeetBrands />
        <BrandCard />
    </HeaderFooterLayout>
)
 
export default BrandsPage