import React from "react"
import BlogCard from "../components/BlogCard"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogIntroduction from "../modules/BlogIntroduction"
 
const BlogPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <BlogIntroduction />
        <BlogCard />
    </HeaderFooterLayout>
)

export default BlogPage