import { FC } from 'react';
import { useStore, shallow } from '../store';
import styled from '@emotion/styled';
import SymbolCard from './SymbolCard';

const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 650px) {
    grid-auto-flow: row;
    grid-template-columns: auto;
  }
`;

const SelectedItems: FC = () => {
  const [selections] = useStore((state) => [state.selections], shallow);

  return (
    <Grid>
      {selections.map((data) => (
        <SymbolCard key={data.symbol} {...data} />
      ))}
    </Grid>
  );
};

SelectedItems.displayName = 'SelectedItems';
export default SelectedItems;
