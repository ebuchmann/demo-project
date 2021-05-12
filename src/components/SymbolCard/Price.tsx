import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import styled from '@emotion/styled';
import Currency from './Currency';

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const getColor = (change: number): string => {
  if (change > 0) return 'green';
  else if (change < 0) return 'red';

  return 'black';
};

const Change = styled.div<{ change: number }>`
  color: ${(props) => getColor(props.change)};
  font-size: 80%;
`;

const IconContainer = styled.div`
  margin-right: 16px;
`;

export const percentToFixed = (changePercent: string): string => {
  const number = Number(changePercent?.slice(0, changePercent.length - 1));
  const prefixPlus = number >= 0 ? '+' : '';

  if (!number) return 'No change';
  return `${prefixPlus + number.toFixed(2)}%`;
};

const getIcon = (change: number): JSX.Element => {
  if (change > 0)
    return (
      <ArrowUpwardIcon
        data-testid="arrow-up"
        fontSize="large"
        style={{ color: getColor(change) }}
      />
    );
  if (change < 0)
    return (
      <ArrowDownwardIcon
        data-testid="arrow-down"
        fontSize="large"
        style={{ color: getColor(change) }}
      />
    );

  return <DragHandleIcon data-testid="equals" fontSize="large" />;
};

interface PriceProps {
  change: number;
  changePercent: string;
  price: number;
  currency: string;
}

const Price: FC<PriceProps> = ({ change, changePercent, currency, price }) => {
  return (
    <PriceContainer>
      <IconContainer>{getIcon(change)}</IconContainer>
      <Typography variant="h6" component="div">
        <Currency currency={currency} value={price} />
        <Change data-testid="change" change={change}>
          {percentToFixed(changePercent)}
        </Change>
      </Typography>
    </PriceContainer>
  );
};

Price.displayName = 'Price';
export default Price;
