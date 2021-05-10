import Stats from './Stats';
import { render } from '@testing-library/react';

describe(Stats, () => {
  it('should render high and low values', () => {
    const { getByText } = render(<Stats currency="USD" high={45} low={35} missingEps={false} />);

    expect(getByText('$45.00')).toBeTruthy();
    expect(getByText('$35.00')).toBeTruthy();
  });

  it('should render that there is no EPS', () => {
    const { getByText } = render(<Stats currency="USD" high={45} low={35} missingEps={true} />);

    expect(getByText('No EPS available')).toBeTruthy();
  });
});
