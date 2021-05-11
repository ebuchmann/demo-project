import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server';
import { gql } from '@apollo/client';
import nock from 'nock';
import SymbolAPI from './symbol.api';

import { dataSources, typeDefs, resolvers } from '../';

nock('https://www.alphavantage.co/query')
  .get(/\?function=SYMBOL_SEARCH&keywords=CAT.*/)
  .reply(200, {
    bestMatches: [
      {
        '1. symbol': 'CAT',
        '2. name': 'Cat Company',
        '3. type': 'Equity',
        '4. region': 'United States',
        '5. marketOpen': '09:30',
        '6. marketClose': '16:00',
        '7. timezone': 'UTC-04',
        '8. currency': 'USD',
        '9. matchScore': '1.0000',
      },
    ],
  })
  .get(/\?function=OVERVIEW&symbol=CAT.*/)
  .reply(200, {
    Symbol: 'CAT',
    AssetType: 'Common Stock',
    EPS: '5.978',
  })
  .get(/\?function=GLOBAL_QUOTE&symbol=CAT/)
  .reply(200, {
    'Global Quote': {
      '01. symbol': 'CAT',
      '02. open': '145.9200',
      '03. high': '146.1400',
      '04. low': '144.5700',
      '05. price': '145.4600',
      '06. volume': '7003467',
      '07. latest trading day': '2021-05-07',
      '08. previous close': '148.4200',
      '09. change': '-2.9600',
      '10. change percent': '-1.9943%',
    },
  });

const constructTestServer = () => {
  const symbol = new SymbolAPI();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
  });

  return { server, symbol };
};

export const SearchSymbols = gql`
  query SearchSymbols($keywords: String!) {
    searchSymbols(keywords: $keywords) {
      symbol
      name
      currency
    }
  }
`;

export const GetSymbol = gql`
  query GlobalQuote($symbol: ID!) {
    symbol(symbol: $symbol) {
      symbol
      EPS
    }
  }
`;

export const GlobalQuote = gql`
  query GlobalQuote($symbol: ID!) {
    globalQuote(symbol: $symbol) {
      symbol
      open
      high
      low
      price
      change
      changePercent
    }
  }
`;

describe('Symbol Queries', () => {
  it('searches by keyword', async () => {
    const { server } = constructTestServer();
    const { query } = createTestClient(server);
    const res = await query({ query: SearchSymbols, variables: { keywords: 'CAT' } });

    expect(res.data).toEqual(
      expect.objectContaining({
        searchSymbols: [
          {
            symbol: 'CAT',
            name: 'Cat Company',
            currency: 'USD',
          },
        ],
      }),
    );
  });

  it('gets details of a symbol', async () => {
    const { server } = constructTestServer();
    const { query } = createTestClient(server);
    const res = await query({ query: GetSymbol, variables: { symbol: 'CAT' } });

    expect(res.data).toEqual(
      expect.objectContaining({
        symbol: {
          symbol: 'CAT',
          EPS: '5.978',
        },
      }),
    );
  });

  it('gets global quote info for a symbol', async () => {
    const { server } = constructTestServer();
    const { query } = createTestClient(server);
    const res = await query({ query: GlobalQuote, variables: { symbol: 'CAT' } });

    expect(res.data).toEqual(
      expect.objectContaining({
        globalQuote: {
          change: -2.96,
          changePercent: '-1.9943%',
          high: 146.14,
          low: 144.57,
          open: 145.92,
          price: 145.46,
          symbol: 'CAT',
        },
      }),
    );
  });
});
