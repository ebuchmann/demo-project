import { gql } from 'apollo-server-express';

// If adding a new property to these types, also add a key/value mapping for
// the type in the ./utils.ts file

export default gql`
  type Query {
    symbol(symbol: ID!): SymbolDetail
    searchSymbols(keywords: String!): [Symbol]
    globalQuote(symbol: ID!): GlobalQuote
  }

  type Symbol {
    symbol: ID!
    name: String!
    type: String
    region: String
    marketOpen: String
    marketClose: String
    timezone: String
    currency: String
    matchScore: String
  }

  type SymbolDetail {
    symbol: ID
    assetType: String
    name: String
    description: String
    CIK: Int
    exchange: String
    currency: String
    country: String
    sector: String
    industry: String
    address: String
    fullTimeEmployees: Int
    fiscalYearEnd: String
    latestQuarter: String
    marketCapitalization: Int
    EBITDA: Int
    PERatio: Float
    PEGRatio: Float
    bookValue: Float
    dividendPerShare: Float
    dividendYield: Float
    EPS: Float
    revenuePerShareTTM: Float
    profitMargin: Float
    operatingMarginTTM: Float
    returnOnAssetsTTM: Float
    returnOnEquityTTM: Float
    revenueTTM: Int
    grossProfitTTM: Int
    dilutedEPSTTM: Float
    quarterlyEarningsGrowthYOY: Float
    quarterlyRevenueGrowthYOY: Float
    analystTargetPrice: Float
    trailingPE: Float
    forwardPE: Float
    priceToSalesRatioTTM: Float
    priceToBookRatio: Float
    EVToRevenue: Float
    EVToEBITDA: Float
    beta: Float
    weekHigh52: Float
    weekLow52: Float
    dayMovingAverage50: Float
    dayMovingAverage200: Float
    sharesOutstanding: Int
    sharesFloat: Int
    sharesShort: Int
    sharesShortPriorMonth: Int
    shortRatio: Float
    shortPercentOutstanding: Float
    shortPercentFloat: Float
    percentInsiders: Float
    percentInstitutions: Float
    forwardAnnualDividendRate: Float
    forwardAnnualDividendYield: Float
    payoutRatio: Float
    dividendDate: String
    exDividendDate: String
    lastSplitFactor: String
    lastSplitDate: String
  }

  type GlobalQuote {
    symbol: ID
    open: Float
    high: Float
    low: Float
    price: Float
    volume: Int
    latestTradingDay: String
    previousClose: Float
    change: Float
    changePercent: String
  }
`;
