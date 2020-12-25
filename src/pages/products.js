import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import AllProducts from "../components/AllProducts"
 
const ProductsPage = () => (
    <HeaderFooterLayout activeTab="Products">
        <AllProducts/>
    </HeaderFooterLayout>
)
 
export default ProductsPage