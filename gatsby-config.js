require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
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

    `gatsby-plugin-sass`, `gatsby-plugin-sharp`,`gatsby-transformer-sharp`,{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
 
      {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Noto Sans", "Roboto", "Nerko One", "Open Sans"],
        display: "swap",
      },
    },
    
  ],
}
