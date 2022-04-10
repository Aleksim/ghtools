require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata:{
    title:"Newest Marketing Tools",
    description: "Find the newest growth hacking and marketing tools from growthhackertools.io.",
    titleTemplate: "%s | Newest Marketing Tools",
    author:"@aleksimmonen",
    twitterUsername:"@aleksimmonen",
    image:"/hackertools.png",
    url:"https://www.growthhackertools.io",
  },
  plugins: [
    {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-5Q8FSM9",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // // Defaults to null
      // defaultDataLayer: { platform: "gatsby" },

      // // Specify optional GTM environment details.
      // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
      // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      // dataLayerName: "YOUR_DATA_LAYER_NAME",

      // // Name of the event that is triggered
      // // on every Gatsby route change.
      // //
      // // Defaults to gatsby-route-change
      // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      // Defaults to false
      enableWebVitalsTracking: true,
      // Defaults to https://www.googletagmanager.com
      selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
    },
  },
    `gatsby-plugin-react-helmet`,
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
