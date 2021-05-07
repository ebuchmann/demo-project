import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLContext } from './context-type';
import { gql } from '@apollo/client';
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
  open?: Maybe<Scalars['String']>;
  high?: Maybe<Scalars['String']>;
  low?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  latestTradingDay?: Maybe<Scalars['String']>;
  previousClose?: Maybe<Scalars['String']>;
  change?: Maybe<Scalars['String']>;
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
  symbol?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  marketOpen?: Maybe<Scalars['String']>;
  marketClose?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
};

export type SymbolDetail = {
  __typename?: 'SymbolDetail';
  symbol?: Maybe<Scalars['ID']>;
  assetType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};




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
  String: ResolverTypeWrapper<Scalars['String']>;
  Query: ResolverTypeWrapper<{}>;
  Symbol: ResolverTypeWrapper<Symbol>;
  SymbolDetail: ResolverTypeWrapper<SymbolDetail>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  GlobalQuote: GlobalQuote;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Query: {};
  Symbol: Symbol;
  SymbolDetail: SymbolDetail;
  Upload: Scalars['Upload'];
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = GraphQLContext, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GlobalQuoteResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['GlobalQuote'] = ResolversParentTypes['GlobalQuote']> = {
  symbol?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  open?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  high?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  low?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latestTradingDay?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previousClose?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  change?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  changePercent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  symbol?: Resolver<Maybe<ResolversTypes['SymbolDetail']>, ParentType, ContextType, RequireFields<QuerySymbolArgs, 'symbol'>>;
  searchSymbols?: Resolver<Maybe<Array<Maybe<ResolversTypes['Symbol']>>>, ParentType, ContextType, RequireFields<QuerySearchSymbolsArgs, 'keywords'>>;
  globalQuote?: Resolver<Maybe<ResolversTypes['GlobalQuote']>, ParentType, ContextType, RequireFields<QueryGlobalQuoteArgs, 'symbol'>>;
};

export type SymbolResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Symbol'] = ResolversParentTypes['Symbol']> = {
  symbol?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marketOpen?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  marketClose?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SymbolDetailResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SymbolDetail'] = ResolversParentTypes['SymbolDetail']> = {
  symbol?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  assetType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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