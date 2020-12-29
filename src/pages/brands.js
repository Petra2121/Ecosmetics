import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BrandCardParagraph from "../modules/BrandCardParagraph"
import MeetBrands from "../components/MeetOurBrands"
 
const BrandsPage = () => (
    <HeaderFooterLayout activeTab="Brands">
        <MeetBrands />
        <BrandCardParagraph />
    </HeaderFooterLayout>
)
 
export default BrandsPage