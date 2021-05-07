import express from 'express';
import config from 'config';
import { ApolloServer } from 'apollo-server-express';
import { dataSources, typeDefs, resolvers } from './gql';

const app = express();
const port = config.get<number>('server.port');

const server = new ApolloServer({ dataSources, typeDefs, resolvers });

server.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
