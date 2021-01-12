import React from "react"
import OneProduct from "../components/OneProduct"
import HeaderFooterLayout from "../layouts/headerFooter"
import SEO from "../components/seo"

const ProductPage = () => (
    <HeaderFooterLayout activeTab="Products">
        <SEO title="Eco-friendly products"
         description="Best natural products that are eco and pet friendly with amazingly low prices."
         keywords="shop, beauty, cosmetics, eco, eco-friendly, skin, nature, care, sustainable, organic, makeup, products, face, natural, palm-oil, hair, shampoo, shower gel, soap, cream, conditioner, blush, lipstick"
        />
        <OneProduct />
    </HeaderFooterLayout>
)
 
export default ProductPage