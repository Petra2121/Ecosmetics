import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import ProductsAndFilter from "../modules/ProductsAndFilter"
import SEO from "../components/seo"

const ProductsPage = () => (
    <HeaderFooterLayout activeTab="Products">
        <SEO title="Eco-friendly products"
         description="Best natural products that are eco and pet friendly with amazingly low prices."
         keywords="shop, beauty, cosmetics, eco, eco-friendly, skin, nature, care, sustainable, organic, makeup, products, face, natural, palm-oil, hair, shampoo, shower gel, soap, cream, conditioner, blush, lipstick"
        />
        <ProductsAndFilter />
    </HeaderFooterLayout>
)
 
export default ProductsPage