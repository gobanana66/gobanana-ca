module.exports = {
  siteMetadata: {
    title: "Anna Klibanov – Senior Product/UX Designer",
    description: "Thoughtful UX. Scalable systems. Clean execution.",
    siteUrl: "https://gobanana.ca",
    image: "/profile.jpg",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-anchor-links",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.ico",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "src/data/", // <-- adjust to where your portfolio.json lives
      },
    },
  ],
};
