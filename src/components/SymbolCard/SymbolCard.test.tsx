import SymbolCard from './SymbolCard';
import { renderWithProviders, actWait } from '../../../test-utils/utils';

describe(SymbolCard, () => {
  it('renders a loading state', async () => {
    const { baseElement } = renderWithProviders(
      <SymbolCard symbol="CAT" name="Cat Company" currency="USD" />,
    );
    const progress = baseElement.querySelector('.MuiCircularProgress-root');
    expect(progress).toBeTruthy();
    await actWait(0);
  });

  it('renders information after getting data', async () => {
    const { getByText } = renderWithProviders(
      <SymbolCard symbol="CAT" name="Cat Company" currency="USD" />,
    );

    await actWait(0);

    expect(getByText('Cat Company')).toBeTruthy();
    expect(getByText('$350.00')).toBeTruthy();
  });
});
