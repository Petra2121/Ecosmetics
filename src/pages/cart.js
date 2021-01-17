import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import Cart from "../components/Cart"
import SEO from "../components/seo"

const BlogPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <SEO title="Shopping Cart"
         description=""
         keywords="beauty, cosmetics, eco, eco-friendly, skin, nature, care, sustainable, organic, makeup, products, face, natural, palm-oil, hair, shampoo, shower gel, soap, cream, conditioner, blush, lipstick, hair, vacation, dementia, washing, skin care, wardrobe"
        />
        <Cart/>
    </HeaderFooterLayout>
)

export default BlogPage