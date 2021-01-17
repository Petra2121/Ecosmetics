import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import CartMobile from "../components/CartMobile"
import SEO from "../components/seo"

const Cart = () => (
    <HeaderFooterLayout activeTab="Cart">
        <SEO title="Shopping Cart"
         description=""
         keywords="beauty, cosmetics, eco, eco-friendly, skin, nature, care, sustainable, organic, makeup, products, face, natural, palm-oil, hair, shampoo, shower gel, soap, cream, conditioner, blush, lipstick, hair, vacation, dementia, washing, skin care, wardrobe"
        />
        <CartMobile/>
    </HeaderFooterLayout>
)

export default Cart