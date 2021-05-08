import React, { FC, useEffect, useLayoutEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useGlobalQuoteQuery } from '../gql/generated';
import styled from '@emotion/styled';
import { useStore, shallow } from '../store';
import Price from './SymbolCard/Price';
import Stats from './SymbolCard/Stats';

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid grey;
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr;
  background-color: white;
  border-radius: 4px;
`;

const LoadingWrapper = styled.div`
  border: 1px solid grey;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 4px;
`;

interface Props {
  symbol: string;
  name: string;
  currency: string;
}

const SelectedItem: FC<Props> = ({ symbol, name, currency }) => {
  const { data, loading, error, refetch } = useGlobalQuoteQuery({ variables: { symbol } });
  const { change, changePercent, price, high, low } = data?.globalQuote || {};
  const { EPS } = data?.symbol || {};
  const [addEps, removeEps] = useStore((state) => [state.addEps, state.removeEps], shallow);
  const missingEps = EPS === 'None' || !EPS;

  useEffect(() => {
    if (!missingEps) addEps(symbol, Number(EPS));
  }, [addEps, EPS]);

  useLayoutEffect(() => {
    return () => removeEps(symbol);
  }, []);

  if (loading)
    return (
      <LoadingWrapper>
        <CircularProgress />
      </LoadingWrapper>
    );

  if (error) {
    return (
      <p>
        Oh crap! Here's a button to try that again{' '}
        <button onClick={() => refetch()}>Click me</button>
      </p>
    );
  }

  return (
    <Wrapper>
      <div>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{symbol}</Typography>
      </div>
      <Price {...{ change, changePercent, price, currency }} />
      <Stats {...{ high, low, missingEps, currency }} />
    </Wrapper>
  );
};

export default SelectedItem;
