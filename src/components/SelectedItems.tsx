import React, { FC } from 'react';
import { useStore, shallow } from '../store';
import SelectedItem from './SelectedItem';

const SelectedItems: FC = () => {
  const [selections] = useStore((state) => [state.selections], shallow);

  return (
    <>
      {selections.map((data) => (
        <SelectedItem key={data.symbol} {...data} />
      ))}
    </>
  );
};

SelectedItems.displayName = 'SelectedItems';
export default SelectedItems;
