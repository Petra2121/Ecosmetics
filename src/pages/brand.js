import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BrandIntroduction from "../components/BrandIntroduction"
import BrandSpecifics from "../components/BrandSpecifics"
 
const BrandsPage = () => (
    <HeaderFooterLayout activeTab="Brands">
        <BrandIntroduction />
        <BrandSpecifics />
    </HeaderFooterLayout>
)
 
export default BrandsPage