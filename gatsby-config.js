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
