import { GraphQLClient } from 'graphql-request';

const graphqlConnect = new GraphQLClient(
  process.env.HYGRAPH_CONTENT_API as string
);

export default graphqlConnect;
