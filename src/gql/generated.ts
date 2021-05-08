import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GlobalQuote = {
  __typename?: 'GlobalQuote';
  symbol?: Maybe<Scalars['ID']>;
  open?: Maybe<Scalars['Float']>;
  high?: Maybe<Scalars['Float']>;
  low?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Int']>;
  latestTradingDay?: Maybe<Scalars['String']>;
  previousClose?: Maybe<Scalars['Float']>;
  change?: Maybe<Scalars['Float']>;
  changePercent?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  symbol?: Maybe<SymbolDetail>;
  searchSymbols?: Maybe<Array<Maybe<Symbol>>>;
  globalQuote?: Maybe<GlobalQuote>;
};


export type QuerySymbolArgs = {
  symbol: Scalars['ID'];
};


export type QuerySearchSymbolsArgs = {
  keywords: Scalars['String'];
};


export type QueryGlobalQuoteArgs = {
  symbol: Scalars['ID'];
};

export type Symbol = {
  __typename?: 'Symbol';
  symbol: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  marketOpen?: Maybe<Scalars['String']>;
  marketClose?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  currency: Scalars['String'];
  matchScore?: Maybe<Scalars['String']>;
};

export type SymbolDetail = {
  __typename?: 'SymbolDetail';
  symbol?: Maybe<Scalars['ID']>;
  assetType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  CIK?: Maybe<Scalars['Int']>;
  exchange?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  fullTimeEmployees?: Maybe<Scalars['Int']>;
  fiscalYearEnd?: Maybe<Scalars['String']>;
  latestQuarter?: Maybe<Scalars['String']>;
  marketCapitalization?: Maybe<Scalars['Int']>;
  EBITDA?: Maybe<Scalars['Int']>;
  PERatio?: Maybe<Scalars['Float']>;
  PEGRatio?: Maybe<Scalars['Float']>;
  bookValue?: Maybe<Scalars['Float']>;
  dividendPerShare?: Maybe<Scalars['Float']>;
  dividendYield?: Maybe<Scalars['Float']>;
  EPS?: Maybe<Scalars['String']>;
  revenuePerShareTTM?: Maybe<Scalars['Float']>;
  profitMargin?: Maybe<Scalars['Float']>;
  operatingMarginTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  revenueTTM?: Maybe<Scalars['Int']>;
  grossProfitTTM?: Maybe<Scalars['Int']>;
  dilutedEPSTTM?: Maybe<Scalars['Float']>;
  quarterlyEarningsGrowthYOY?: Maybe<Scalars['Float']>;
  quarterlyRevenueGrowthYOY?: Maybe<Scalars['Float']>;
  analystTargetPrice?: Maybe<Scalars['Float']>;
  trailingPE?: Maybe<Scalars['Float']>;
  forwardPE?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatio?: Maybe<Scalars['Float']>;
  EVToRevenue?: Maybe<Scalars['Float']>;
  EVToEBITDA?: Maybe<Scalars['Float']>;
  beta?: Maybe<Scalars['Float']>;
  weekHigh52?: Maybe<Scalars['Float']>;
  weekLow52?: Maybe<Scalars['Float']>;
  dayMovingAverage50?: Maybe<Scalars['Float']>;
  dayMovingAverage200?: Maybe<Scalars['Float']>;
  sharesOutstanding?: Maybe<Scalars['Int']>;
  sharesFloat?: Maybe<Scalars['Int']>;
  sharesShort?: Maybe<Scalars['Int']>;
  sharesShortPriorMonth?: Maybe<Scalars['Int']>;
  shortRatio?: Maybe<Scalars['Float']>;
  shortPercentOutstanding?: Maybe<Scalars['Float']>;
  shortPercentFloat?: Maybe<Scalars['Float']>;
  percentInsiders?: Maybe<Scalars['Float']>;
  percentInstitutions?: Maybe<Scalars['Float']>;
  forwardAnnualDividendRate?: Maybe<Scalars['Float']>;
  forwardAnnualDividendYield?: Maybe<Scalars['Float']>;
  payoutRatio?: Maybe<Scalars['Float']>;
  dividendDate?: Maybe<Scalars['String']>;
  exDividendDate?: Maybe<Scalars['String']>;
  lastSplitFactor?: Maybe<Scalars['String']>;
  lastSplitDate?: Maybe<Scalars['String']>;
};


export type SearchSymbolsQueryVariables = Exact<{
  keywords: Scalars['String'];
}>;


export type SearchSymbolsQuery = (
  { __typename?: 'Query' }
  & { searchSymbols?: Maybe<Array<Maybe<(
    { __typename?: 'Symbol' }
    & Pick<Symbol, 'symbol' | 'name' | 'currency'>
  )>>> }
);

export type GlobalQuoteQueryVariables = Exact<{
  symbol: Scalars['ID'];
}>;


export type GlobalQuoteQuery = (
  { __typename?: 'Query' }
  & { globalQuote?: Maybe<(
    { __typename?: 'GlobalQuote' }
    & Pick<GlobalQuote, 'symbol' | 'open' | 'high' | 'low' | 'price' | 'change' | 'changePercent'>
  )>, symbol?: Maybe<(
    { __typename?: 'SymbolDetail' }
    & Pick<SymbolDetail, 'symbol' | 'EPS'>
  )> }
);


export const SearchSymbolsDocument = gql`
    query SearchSymbols($keywords: String!) {
  searchSymbols(keywords: $keywords) {
    symbol
    name
    currency
  }
}
    `;

/**
 * __useSearchSymbolsQuery__
 *
 * To run a query within a React component, call `useSearchSymbolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSymbolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSymbolsQuery({
 *   variables: {
 *      keywords: // value for 'keywords'
 *   },
 * });
 */
export function useSearchSymbolsQuery(baseOptions: Apollo.QueryHookOptions<SearchSymbolsQuery, SearchSymbolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchSymbolsQuery, SearchSymbolsQueryVariables>(SearchSymbolsDocument, options);
      }
export function useSearchSymbolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchSymbolsQuery, SearchSymbolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchSymbolsQuery, SearchSymbolsQueryVariables>(SearchSymbolsDocument, options);
        }
export type SearchSymbolsQueryHookResult = ReturnType<typeof useSearchSymbolsQuery>;
export type SearchSymbolsLazyQueryHookResult = ReturnType<typeof useSearchSymbolsLazyQuery>;
export type SearchSymbolsQueryResult = Apollo.QueryResult<SearchSymbolsQuery, SearchSymbolsQueryVariables>;
export const GlobalQuoteDocument = gql`
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
  symbol(symbol: $symbol) {
    symbol
    EPS
  }
}
    `;

/**
 * __useGlobalQuoteQuery__
 *
 * To run a query within a React component, call `useGlobalQuoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalQuoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalQuoteQuery({
 *   variables: {
 *      symbol: // value for 'symbol'
 *   },
 * });
 */
export function useGlobalQuoteQuery(baseOptions: Apollo.QueryHookOptions<GlobalQuoteQuery, GlobalQuoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlobalQuoteQuery, GlobalQuoteQueryVariables>(GlobalQuoteDocument, options);
      }
export function useGlobalQuoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlobalQuoteQuery, GlobalQuoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlobalQuoteQuery, GlobalQuoteQueryVariables>(GlobalQuoteDocument, options);
        }
export type GlobalQuoteQueryHookResult = ReturnType<typeof useGlobalQuoteQuery>;
export type GlobalQuoteLazyQueryHookResult = ReturnType<typeof useGlobalQuoteLazyQuery>;
export type GlobalQuoteQueryResult = Apollo.QueryResult<GlobalQuoteQuery, GlobalQuoteQueryVariables>;