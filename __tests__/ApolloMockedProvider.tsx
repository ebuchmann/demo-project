import React, { FC } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema, IMocks } from '@graphql-tools/mock';
import { ITypeDefinitions } from '@graphql-tools/utils';

interface Props {
  typeDefs: ITypeDefinitions;
  mocks?: IMocks;
}

const ApolloMockedProvider: FC<Props> = ({ children, mocks = {}, typeDefs }) => {
  const baseSchema = makeExecutableSchema({ typeDefs });

  const schema = addMocksToSchema({ schema: baseSchema, mocks, preserveResolvers: false });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

ApolloMockedProvider.displayName = 'ApolloMockedProvider';
export default ApolloMockedProvider;
