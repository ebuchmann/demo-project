import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { useGlobalQuoteQuery } from '../gql/generated';
import styled from '@emotion/styled';
import { useStore, shallow } from '../store';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid black;
`;

const Change = styled.div<{ isPositive: boolean }>`
  color: ${(props) => (props.isPositive ? 'green' : 'red')};
`;

interface Props {
  symbol: string;
  name: string;
}

const SelectedItem: FC<Props> = ({ symbol, name }) => {
  const { data, loading, error, refetch } = useGlobalQuoteQuery({ variables: { symbol } });
  const { change, changePercent, price, high, low } = data?.globalQuote || {};
  const { EPS } = data?.symbol || {};
  const [addEps, chartEps] = useStore((state) => [state.addEps, state.chartEps], shallow);

  React.useEffect(() => {
    addEps(symbol, EPS);
  }, [addEps, EPS]);

  React.useLayoutEffect(() => {}, []);

  if (loading) return null;

  if (error) {
    return (
      <p>
        Oh crap! Here's a button to try that again{' '}
        <button onClick={() => refetch()}>Click me</button>
      </p>
    );
  }

  const isPositive = change >= 0;

  return (
    <Wrapper>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body1" component="div">
        {price} <Change isPositive={isPositive}>{changePercent}</Change>
      </Typography>
      {isPositive ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      <Typography variant="h5">Stats</Typography>
      High: {high.toFixed(2)}
      <br />
      Low: {low.toFixed(2)}
    </Wrapper>
  );
};

export default SelectedItem;
