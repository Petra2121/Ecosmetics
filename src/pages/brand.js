import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import LocationHOC from "../components/LocationHOC"
import BrandIntroduction from "../components/BrandIntroduction"
import BrandSpecifics from "../components/BrandSpecifics"
import BrandOurProduct from "../modules/BrandOurProduct"
import SEO from "../components/seo"

const BrandsPage = () => (
    <HeaderFooterLayout activeTab="Brands">
        <SEO title="Eco-friendly brands"
         description="We've Rounded Up For You Some Of Our Favorite Products From The Best Sustainable Brands On The Market."
         keywords="Fat and the Moon, Nudi Goods, Sea witch botanicals, dab herb makeup, dirty hippie cosimetics, the body shop, shop, beauty, cosmetics, eco, eco-friendly, skin, nature, care, sustainable, organic, makeup, polution, brands, natural, palm-oil"
        />
        <LocationHOC>
            <BrandIntroduction />
        </LocationHOC>
        <LocationHOC>
            <BrandSpecifics />
        </LocationHOC>
            <BrandOurProduct />
    </HeaderFooterLayout>
)
 
export default BrandsPage