import create from 'zustand';
import shallow from 'zustand/shallow';
import { SymbolInfo } from '../gql/generated';

export { shallow };

export type Selections = Pick<SymbolInfo, 'symbol' | 'name' | 'currency'>;

interface State {
  selections: Selections[];
  chartEps: { symbol: string; eps: number }[];
  setSelections: (values: Selections[]) => void;
  addEps: (symbol: string, eps: number) => void;
  removeEps: (symbol: string) => void;
}

export const useStore = create<State>((set) => ({
  selections: [],
  chartEps: [],
  setSelections: (values) => set(() => ({ selections: values })),
  addEps: (symbol, eps) => set((state) => ({ chartEps: [...state.chartEps, { symbol, eps }] })),
  removeEps: (symbolRem) =>
    set((state) => ({ chartEps: state.chartEps.filter(({ symbol }) => symbol !== symbolRem) })),
}));
