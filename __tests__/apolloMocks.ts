// https://www.graphql-tools.com/docs/mocking#customizing-mocks
import { IMocks } from '@graphql-tools/mock';

const mocks: IMocks = {
  GlobalQuote: () => ({
    symbol: 'CAT',
    price: 350,
  }),
  SymbolInfo: () => ({
    symbol: 'CAT',
    name: 'Cat Company',
    currency: 'USD',
  }),
};

export default mocks;
