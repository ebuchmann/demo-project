import React from 'react';

interface CurrencyProps {
  currency: string;
  value: number;
}

const Currency = ({ currency, value }) => {
  return <>{new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value)}</>;
};

export default Currency;
