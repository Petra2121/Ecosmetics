import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import NotFound from "../modules/PageNotFound"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <HeaderFooterLayout activeTab="">
    <SEO title="404 page"
      description="404 error!"
      keywords="nothing, error, 404"
    />
    <NotFound></NotFound>
  </HeaderFooterLayout>
)

export default NotFoundPage
