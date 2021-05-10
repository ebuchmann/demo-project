import Currency from './Currency';
import { render } from '@testing-library/react';

describe(Currency, () => {
  it('should render $100.00 in USD', () => {
    const { getByText } = render(<Currency currency="USD" value="100" />);
    expect(getByText('$100.00')).toBeTruthy();
  });

  it('should render in €100.00 EUR', () => {
    const { getByText } = render(<Currency currency="EUR" value="100" />);
    expect(getByText('€100.00')).toBeTruthy();
  });
});
