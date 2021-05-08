import React from 'react';
import client from '../gql/apollo-client';

const Chart = () => {
  const data = Object.values(client.cache.extract().ROOT_QUERY || {});
  // @ts-ignore
  console.log(data.filter((d) => d?.symbol === 'NKE'));
  return <div>chart</div>;
};

export default Chart;
