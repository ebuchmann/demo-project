import React from 'react';
import { useStore, shallow } from '../store';
import client from '../gql/apollo-client';

const Chart = () => {
  const [chartEps] = useStore((state) => [state.chartEps], shallow);
  return <div>{JSON.stringify(chartEps, null, 2)}</div>;
};

export default Chart;
