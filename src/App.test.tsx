import App from './App';
import { renderWithProviders, fireEvent, actWait } from '../test-utils/utils';

const doughnut = jest.fn();

jest.mock('react-chartjs-2', () => ({
  Doughnut: (props) => {
    doughnut(props);
    return <div>kittens</div>;
  },
}));

describe(App, () => {
  it('searches, selects, and renders data', async () => {
    const { baseElement, getAllByRole, queryByTestId } = renderWithProviders(<App />);
    const input = baseElement.querySelector('input');

    fireEvent.change(input, { target: { value: 'CAT' } });

    // Should not have anything selected
    expect(baseElement.querySelector('.MuiChip-label')).toBeFalsy();
    expect(queryByTestId('item-CAT')).toBeFalsy();

    await actWait(501);

    const firstOption = getAllByRole('option')[0];

    fireEvent.click(firstOption);

    await actWait(0);

    // Should have a chip added and render a card
    expect(baseElement.querySelector('.MuiChip-label')).toBeTruthy();
    expect(queryByTestId('item-CAT')).toBeTruthy();
  });
});
