import React from "react"
import OneProduct from "../components/OneProduct"
import HeaderFooterLayout from "../layouts/headerFooter"
 
const ProductPage = () => (
    <HeaderFooterLayout activeTab="Products">
        <OneProduct />
    </HeaderFooterLayout>
)
 
export default ProductPage