import React from "react"
import ProductThreeImages from "../components/ProductThreeImages"
import HeaderFooterLayout from "../layouts/headerFooter"
 
const ProductPage = () => (
    <HeaderFooterLayout activeTab="Products">
        <ProductThreeImages />
    </HeaderFooterLayout>
)
 
export default ProductPage