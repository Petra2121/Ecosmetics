import React from "react"
import SinglePost from "../components/SinglePostTemplate"
import HeaderFooterLayout from "../layouts/headerFooter"
 
const TopicPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <SinglePost />
    </HeaderFooterLayout>
)
 
export default TopicPage