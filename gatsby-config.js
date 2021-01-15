module.exports = {
  siteMetadata: {
    title: `Ecosmetics`,
    description: `From make-up to skincare, here are the eco-friendly beauty products that every woman who wants to look flawless and save the world at the same time, needs to have on her radar...`,
    author: `Mihaela Wang and Petra Lovric`,
    keywords: `shop, beauty, cosmetics, eco, eco-friendly, skin, nature, care, sustainable, organic, makeup, blog, brands, natural`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/eco.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },

    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/posts`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
