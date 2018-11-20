require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Registered Keyforge Decks Statistics',
    author: 'Michael Holtzman'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        url:
          'https://7mihylrl2ffkvinas7giuqi4ku.appsync-api.us-east-1.amazonaws.com/graphql',
        typeName: 'KeyforgeDecks',
        fieldName: 'keyforgedecks',
        headers: {
          'Content-Type': 'application/graphql',
          'x-api-key': `${process.env.AWS_APPSYNC_TOKEN}`
        }
      }
    }
  ]
};
