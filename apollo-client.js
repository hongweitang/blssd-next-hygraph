import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.HYGRAPH_CONTENT_API,
  // uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

export default client;
