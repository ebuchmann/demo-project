import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import styled from '@emotion/styled';
import Currency from './Currency';

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Change = styled.div<{ isPositive: boolean }>`
  color: ${(props) => (props.isPositive ? 'green' : 'red')};
  font-size: 80%;
`;

const IconContainer = styled.div`
  margin-right: 16px;
`;

const percentToFixed = (changePercent: string): string => {
  const number = Number(changePercent?.slice(0, changePercent.length - 1));

  if (!number) return 'No change';
  return `${number.toFixed(2)}%`;
};

interface PriceProps {
  change: number;
  changePercent: string;
  price: number;
  currency: string;
}

const Price: FC<PriceProps> = ({ change, changePercent, currency, price }) => {
  const isPositive = change >= 0;

  return (
    <PriceContainer>
      <IconContainer>
        {isPositive ? (
          <ArrowUpwardIcon fontSize="large" style={{ color: 'green' }} />
        ) : (
          <ArrowDownwardIcon fontSize="large" style={{ color: 'red' }} />
        )}
      </IconContainer>
      <Typography variant="h6" component="div">
        <Currency currency={currency} value={price} />
        <Change isPositive={isPositive}>{percentToFixed(changePercent)}</Change>
      </Typography>
    </PriceContainer>
  );
};

export default Price;
