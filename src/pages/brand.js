import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BrandIntroduction from "../components/BrandIntroduction"
import BrandSpecifics from "../components/BrandSpecifics"
import BrandOurProduct from "../modules/BrandOurProduct"
 
const BrandsPage = () => (
    <HeaderFooterLayout activeTab="Brands">
        <BrandIntroduction />
        <BrandSpecifics />
        <BrandOurProduct />
    </HeaderFooterLayout>
)
 
export default BrandsPage