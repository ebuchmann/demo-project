// https://www.graphql-tools.com/docs/mocking#customizing-mocks

const mocks = {
  GlobalQuote: () => ({
    symbol: 'CAT',
    price: 350,
  }),
  Symbol: () => ({
    symbol: 'CAT',
    name: 'Cat Company',
    currency: 'USD',
  }),
};

export default mocks;
