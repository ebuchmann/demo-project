import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLContext } from './context-type';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CacheControlScope: CacheControlScope;
  GlobalQuote: ResolverTypeWrapper<GlobalQuote>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Query: ResolverTypeWrapper<{}>;
  Symbol: ResolverTypeWrapper<Symbol>;
  SymbolDetail: ResolverTypeWrapper<SymbolDetail>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  GlobalQuote: GlobalQuote;
  ID: Scalars['ID'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  String: Scalars['String'];
  Query: {};
  Symbol: Symbol;
  SymbolDetail: SymbolDetail;
  Upload: Scalars['Upload'];
  Boolean: Scalars['Boolean'];
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = GraphQLContext, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GlobalQuoteResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['GlobalQuote'] = ResolversParentTypes['GlobalQuote']> = {
  symbol?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  open?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  high?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  low?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latestTradingDay?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previousClose?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  change?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  changePercent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  symbol?: Resolver<Maybe<ResolversTypes['SymbolDetail']>, ParentType, ContextType, RequireFields<QuerySymbolArgs, 'symbol'>>;
  searchSymbols?: Resolver<Maybe<Array<Maybe<ResolversTypes['Symbol']>>>, ParentType, ContextType, RequireFields<QuerySearchSymbolsArgs, 'keywords'>>;
  globalQuote?: Resolver<Maybe<ResolversTypes['GlobalQuote']>, ParentType, ContextType, RequireFields<QueryGlobalQuoteArgs, 'symbol'>>;
};

export type SymbolResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Symbol'] = ResolversParentTypes['Symbol']> = {
  symbol?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marketOpen?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marketClose?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SymbolDetailResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SymbolDetail'] = ResolversParentTypes['SymbolDetail']> = {
  symbol?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  assetType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  CIK?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  exchange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sector?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  industry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullTimeEmployees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fiscalYearEnd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latestQuarter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marketCapitalization?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  EBITDA?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  PERatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  PEGRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bookValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendPerShare?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendYield?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  EPS?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revenuePerShareTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profitMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  operatingMarginTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnOnAssetsTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  returnOnEquityTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  revenueTTM?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  grossProfitTTM?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dilutedEPSTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quarterlyEarningsGrowthYOY?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quarterlyRevenueGrowthYOY?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  analystTargetPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  trailingPE?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  forwardPE?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToSalesRatioTTM?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceToBookRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  EVToRevenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  EVToEBITDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  beta?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weekHigh52?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weekLow52?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dayMovingAverage50?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dayMovingAverage200?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sharesOutstanding?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sharesFloat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sharesShort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sharesShortPriorMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shortRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shortPercentOutstanding?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shortPercentFloat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  percentInsiders?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  percentInstitutions?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  forwardAnnualDividendRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  forwardAnnualDividendYield?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payoutRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dividendDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exDividendDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastSplitFactor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastSplitDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = GraphQLContext> = {
  GlobalQuote?: GlobalQuoteResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Symbol?: SymbolResolvers<ContextType>;
  SymbolDetail?: SymbolDetailResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = GraphQLContext> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = GraphQLContext> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = GraphQLContext> = DirectiveResolvers<ContextType>;