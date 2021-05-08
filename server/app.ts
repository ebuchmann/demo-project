import express from 'express';
import config from 'config';
import { ApolloServer } from 'apollo-server';
import { dataSources, typeDefs, resolvers } from './gql';

// const app = express();
const port = config.get<number>('server.port');

const server = new ApolloServer({
  dataSources,
  typeDefs,
  resolvers,
});

// server.applyMiddleware({ app });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

server
  .listen({ port })
  .then(() => console.log(`Server running at: http://localhost:${port}/graphql`));
