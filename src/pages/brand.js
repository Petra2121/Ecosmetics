import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import LocationHOC from "../components/LocationHOC"
import BrandIntroduction from "../components/BrandIntroduction"
import BrandSpecifics from "../components/BrandSpecifics"
import BrandOurProduct from "../modules/BrandOurProduct"
 
const BrandsPage = () => (
    <HeaderFooterLayout activeTab="Brands">
        <LocationHOC>
            <BrandIntroduction />
        </LocationHOC>
        <LocationHOC>
            <BrandSpecifics />
        </LocationHOC>
            <BrandOurProduct />
    </HeaderFooterLayout>
)
 
export default BrandsPage