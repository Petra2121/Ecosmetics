import React from "react"
import BlogCard from "../components/BlogCard"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogIntroduction from "../modules/BlogIntroduction"
import HeroImageBlog from "../modules/HeroImageBlog"
import SEO from "../components/seo"

const BlogPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <SEO title="Beauty Blog"
         description="We want to educate you also and hear your opinions, be free to leave any feedback."
         keywords="beauty, cosmetics, eco, eco-friendly, skin, nature, care, sustainable, organic, makeup, products, face, natural, palm-oil, hair, shampoo, shower gel, soap, cream, conditioner, blush, lipstick, hair, vacation, dementia, washing, skin care, wardrobe"
        />
        <HeroImageBlog/>
        <BlogIntroduction />
        <BlogCard />
    </HeaderFooterLayout>
)

export default BlogPage