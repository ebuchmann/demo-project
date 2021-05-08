import create from 'zustand';
import shallow from 'zustand/shallow';
import { Symbol } from '../gql/generated';

export { shallow };

export type Selections = Pick<Symbol, 'symbol' | 'name'>;

interface State {
  selections: Selections[];
  setSelections: (values: Selections[]) => void;
}

export const useStore = create<State>((set) => ({
  selections: [],
  setSelections: (values) => set(() => ({ selections: values })),
}));
