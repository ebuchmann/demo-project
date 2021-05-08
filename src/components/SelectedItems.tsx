import React, { FC } from 'react';
import { useStore, shallow } from '../store';
import styled from '@emotion/styled';
import SelectedItem from './SelectedItem';

const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin-bottom: 32px;
`;

const SelectedItems: FC = () => {
  const [selections] = useStore((state) => [state.selections], shallow);

  return (
    <Grid>
      {selections.map((data) => (
        <SelectedItem key={data.symbol} {...data} />
      ))}
    </Grid>
  );
};

SelectedItems.displayName = 'SelectedItems';
export default SelectedItems;
