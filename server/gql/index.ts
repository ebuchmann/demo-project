import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

import SymbolAPI from './symbols/symbol.api';

export interface DataSources {
  symbols: SymbolAPI;
}

export const dataSources = () => ({
  symbols: new SymbolAPI(),
});

export const typeDefs = loadFilesSync(path.join(__dirname, './**/*.schema.*'));

export const resolvers = loadFilesSync(path.join(__dirname, './**/*.resolver.*'));
