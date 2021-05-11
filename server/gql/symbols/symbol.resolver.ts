import { Resolvers } from '../../types/generated';

export default <Resolvers>{
  Query: {
    symbol: (_, { symbol }, { dataSources: { symbols } }) => symbols.getById(symbol),

    searchSymbols: (_, { keywords }, { dataSources: { symbols } }) => symbols.getAll({ keywords }),

    globalQuote: (_, { symbol }, { dataSources: { symbols } }) => symbols.getGlobalQuote(symbol),
  },
};
