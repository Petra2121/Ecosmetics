import React from "react"
import SinglePost from "../components/SinglePostTemplate"
import HeaderFooterLayout from "../layouts/headerFooter"
import SEO from "../components/seo"

const TopicPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <SEO title="Beauty Blog"
         description="We want to educate you also and hear your opinions, be free to leave any feedback."
         keywords="beauty, cosmetics, eco, eco-friendly, skin, nature, care, sustainable, organic, makeup, products, face, natural, palm-oil, hair, shampoo, shower gel, soap, cream, conditioner, blush, lipstick, hair, vacation, dementia, washing, skin care, wardrobe"
        />
        <SinglePost />
    </HeaderFooterLayout>
)
 
export default TopicPage