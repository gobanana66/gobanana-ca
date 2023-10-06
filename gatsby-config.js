module.exports = {
  siteMetadata: {
    title: `Anna Klibanov - Product Designer / Front-End Web Developer`,
    siteUrl: `https://gobanana.ca`, 
    description: `Anna Klibanov is a Product and UX/UI Designer with a passion for crafting user-centric software by integrating creative, practical, and technical skills.`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp","gatsby-plugin-anchor-links", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/favicon.ico',
    },
  },
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'en'
    }
  }]
};