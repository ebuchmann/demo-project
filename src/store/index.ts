import create from 'zustand';
import shallow from 'zustand/shallow';
import { Symbol } from '../gql/generated';

export { shallow };

export type Selections = Pick<Symbol, 'symbol' | 'name'>;

interface State {
  selections: Selections[];
  chartEps: Record<string, number>;
  setSelections: (values: Selections[]) => void;
  addEps: (symbol: string, eps: number) => void;
}

export const useStore = create<State>((set) => ({
  selections: [],
  chartEps: {},
  setSelections: (values) => set(() => ({ selections: values })),
  addEps: (symbol, eps) => set((state) => ({ chartEps: { ...state.chartEps, [symbol]: eps } })),
}));
