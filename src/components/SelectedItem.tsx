import React, { FC, useEffect, useLayoutEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { useGlobalQuoteQuery } from '../gql/generated';
import styled from '@emotion/styled';
import { useStore, shallow } from '../store';
import Price from './SymbolCard/Price';
import Stats from './SymbolCard/Stats';

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid grey;
  display: grid;
  grid-template-rows: 1fr 1fr 1.5fr;
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
  flex-direction: column;
`;

interface Props {
  symbol: string;
  name: string;
  currency: string;
}

const SelectedItem: FC<Props> = ({ symbol, name, currency }) => {
  const { data, loading, error, refetch } = useGlobalQuoteQuery({
    variables: { symbol },
    notifyOnNetworkStatusChange: true,
  });
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
      <LoadingWrapper>
        Something went wrong while trying to load data for {symbol}.
        <Button
          color="primary"
          variant="outlined"
          onClick={() => refetch()}
          style={{ marginTop: '16px' }}
        >
          Try again
        </Button>
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper data-testid={`item-${symbol}`}>
      <div>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{symbol}</Typography>
      </div>
      <Price {...{ change, changePercent, price, currency }} />
      <Stats {...{ high, low, missingEps, currency }} />
    </Wrapper>
  );
};

SelectedItem.displayName = 'SelectedItem';
export default SelectedItem;
