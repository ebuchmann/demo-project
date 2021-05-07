import { gql } from '@apollo/client';

export const SearchSymbols = gql`
  query SearchSymbols($keywords: String!) {
    searchSymbols(keywords: $keywords) {
      symbol
      name
    }
  }
`;
