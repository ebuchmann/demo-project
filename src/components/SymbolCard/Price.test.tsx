import Price, { percentToFixed } from './Price';
import { render } from '@testing-library/react';

describe(Price, () => {
  it('should render positive values', () => {
    const { getByTestId } = render(
      <Price currency="USD" change={45} changePercent="7.2304%" price={300} />,
    );

    expect(getByTestId('arrow-up')).toBeTruthy();
    expect(getByTestId('change').innerHTML).toEqual('+7.23%');
  });

  it('should render negative values', () => {
    const { getByTestId } = render(
      <Price currency="USD" change={-45} changePercent="-7.2304%" price={300} />,
    );

    expect(getByTestId('arrow-down')).toBeTruthy();
    expect(getByTestId('change').innerHTML).toEqual('-7.23%');
  });

  it('should render no change in value', () => {
    const { getByTestId } = render(
      <Price currency="USD" change={0} changePercent="0%" price={300} />,
    );

    expect(getByTestId('equals')).toBeTruthy();
    expect(getByTestId('change').innerHTML).toEqual('No change');
  });
});

describe(percentToFixed, () => {
  it('should format a percentage', () => {
    const value = percentToFixed('7.2304%');

    expect(value).toEqual('+7.23%');
  });

  it('should return "no change" if an incorrect value was entered', () => {
    const value = percentToFixed(null);

    expect(value).toEqual('No change');
  });
});
