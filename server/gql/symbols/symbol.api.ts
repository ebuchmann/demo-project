import { RESTDataSource } from 'apollo-datasource-rest';
import Bottleneck from 'bottleneck';
import {
  SymbolDetail,
  Symbol,
  QuerySearchSymbolsArgs,
  GlobalQuote,
} from '../../../types/generated';
import { renameKeys, globalQuoteKeys, symbolKeys, symbolDetailKeys } from './utils';
import config from 'config';

const apiKey = config.get<string>('apiKey');

const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 1000,
});

interface SymbolResponseData {
  bestMatches: Record<string, string>[];
}

interface GlobalQuoteResponseData {
  'Global Quote': Record<string, string>;
}

export class SymbolAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.alphavantage.co/query';
  }

  async getById(symbol: string): Promise<SymbolDetail> {
    const data = await limiter.schedule(() =>
      this.get<Record<string, string>>(`?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`),
    );

    const cleanedData = renameKeys(data, symbolDetailKeys);

    return cleanedData;
  }

  async getAll({ keywords }: QuerySearchSymbolsArgs): Promise<Symbol[]> {
    const data = await limiter.schedule(() =>
      this.get<SymbolResponseData>(`?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`),
    );

    const cleanedData = data.bestMatches.reduce((prev, curr) => {
      const newData = renameKeys(curr, symbolKeys);
      return [...prev, newData];
    }, []);

    return cleanedData;
  }

  async getGlobalQuote(symbol: string): Promise<GlobalQuote> {
    const data = await limiter.schedule(() =>
      this.get<GlobalQuoteResponseData>(`?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`),
    );

    const cleanedData = renameKeys(data['Global Quote'], globalQuoteKeys);

    return cleanedData;
  }
}

export default SymbolAPI;
