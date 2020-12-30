import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
// import AllProducts from "../components/AllProducts"
// import Filter from "../components/Filter"
import ProductsAndFilter from "../modules/ProductsAndFilter"
 
const ProductsPage = () => (
    <HeaderFooterLayout activeTab="Products">
        <ProductsAndFilter />
    </HeaderFooterLayout>
)
 
export default ProductsPage