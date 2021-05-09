import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Currency from './Currency';
import styled from '@emotion/styled';

const StatContainer = styled.div`
  display: flex;
  max-width: 180px;
  font-size: 18px;
`;

const Label = styled.div`
  color: grey;
`;

const Value = styled.div`
  margin-left: auto;
`;

const Missing = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;

interface StatsProps {
  high: number;
  low: number;
  missingEps: boolean;
  currency: string;
}

const Stats: FC<StatsProps> = ({ currency, high, low, missingEps }) => {
  return (
    <div>
      <Typography variant="h6" style={{ marginBottom: '16px' }}>
        Stats
      </Typography>
      <StatContainer>
        <Label>High:</Label>
        <Value>
          <Currency currency={currency} value={high} />
        </Value>
      </StatContainer>
      <StatContainer>
        <Label>Low:</Label>
        <Value>
          <Currency currency={currency} value={low} />
        </Value>
      </StatContainer>
      {missingEps && <Missing>No EPS available</Missing>}
    </div>
  );
};

Stats.displayName = 'Stats';
export default Stats;
