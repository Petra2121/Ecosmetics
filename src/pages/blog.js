import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogIntroduction from "../modules/BlogIntroduction"
 
const BlogPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <BlogIntroduction />
    </HeaderFooterLayout>
)

export default BlogPage