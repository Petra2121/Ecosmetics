import React from "react"
import BlogCard from "../components/BlogCard"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogIntroduction from "../modules/BlogIntroduction"
import HeroImageBlog from "../modules/HeroImageBlog"
 
const BlogPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <HeroImageBlog/>
        <BlogIntroduction />
        <BlogCard />
    </HeaderFooterLayout>
)

export default BlogPage