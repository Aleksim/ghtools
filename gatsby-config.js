require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata:{
    title:"Growth Hacker Tools",
    description: "Find the newest growth hacking / marketing tools from growthhackertools.io. From hackers to hackers.",
    titleTemplate: "%s | Growth Hacker Tools",
    author:"@aleksimmonen",
    twitterUsername:"@aleksimmonen",
    image:"/hackertools.png",
    url:"https://www.growthhackertools.io",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-J24X8Z8PJ5", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          
        },
      },
    },
    `gatsby-plugin-react-helmet`, 'gatsby-plugin-simple-analytics',
     {
      resolve: `gatsby-source-airtable`,
      options:{
        apiKey:process.env.GATSBY_AIRTABLE_API,
        concurrency:5,
        tables:[
          {
            baseId:process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName:`Data`,

          }
        ]

      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    `gatsby-plugin-sass`, `gatsby-plugin-sharp`,`gatsby-transformer-sharp`,
 
      {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [ "Roboto", "Nerko One", "Open Sans", "Permanent Marker"],
        display: "swap",
      },
    },

    {
      resolve: `@el7cosmos/gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
          },
                    {
            family: `Nerko One`,
          },
          {
            family: `Permanent Marker`,
          },
        ],
      },
    }
    
  ],
}
