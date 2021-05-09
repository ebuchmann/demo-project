import config from 'config';
import { ApolloServer } from 'apollo-server';
import { dataSources, typeDefs, resolvers } from './gql';

const port = config.get<number>('port');

const server = new ApolloServer({
  dataSources,
  typeDefs,
  resolvers,
});

server
  .listen({ port })
  .then(() => console.log(`Server running at: http://localhost:${port}/graphql`));
