import React, { FC } from 'react';
import { useGlobalQuoteQuery } from '../gql/generated';

interface Props {
  symbol: string;
  name: string;
}

const SelectedItem: FC<Props> = ({ symbol, name }) => {
  const { data } = useGlobalQuoteQuery({ variables: { symbol } });
  console.log(data);
  return (
    <p>
      {symbol} ---- {name}
    </p>
  );
};

export default SelectedItem;
