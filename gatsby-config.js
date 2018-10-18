module.exports = {
  siteMetadata: {
    title: 'JAMstack Hackathon!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#fff952',
        theme_color: '#fff952',
        display: 'minimal-ui',
        icon: 'https://i.imgur.com/xFA9RdX.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
