import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BrandIntroduction from "../components/BrandIntroduction"
import BrandSpecifics from "../components/BrandSpecifics"
import BrandProducts from "../modules/BrandOurProduct"
 
const BrandsPage = () => (
    <HeaderFooterLayout activeTab="Brands">
        <BrandIntroduction />
        <BrandSpecifics />
        <BrandProducts />
    </HeaderFooterLayout>
)
 
export default BrandsPage