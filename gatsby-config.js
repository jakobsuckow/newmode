require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `newmode`,
        description: `should prob get that...`,
        author: `@jakobsuckow`,
      },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-airtable`,
            options: {
                apiKey: process.env.AIRTABLE_API_KEY,
                tables: [
                    {
                        baseId: 'app4hMmdSl39Bd2Iv',
                        tableName: 'clothes'
                      }
                ]

            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images`,
            }
          }
    ]
}