import { gql } from '@apollo/client';

export const SearchSymbols = gql`
  query SearchSymbols($keywords: String!) {
    searchSymbols(keywords: $keywords) {
      symbol
      name
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
