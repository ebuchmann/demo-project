import Chart from './Chart';
import { render } from '@testing-library/react';
import { useStore } from '../store';

const doughnut = jest.fn();

jest.mock('react-chartjs-2', () => ({
  Doughnut: (props) => {
    doughnut(props);
    return <div>hi</div>;
  },
}));

describe(Chart, () => {
  it('should not render a chart', () => {
    render(<Chart />);

    expect(doughnut).not.toHaveBeenCalled();
  });

  it('should render a chart', () => {
    useStore.setState({
      chartEps: [
        { symbol: 'CMP', eps: 200 },
        { symbol: 'ULT', eps: 400 },
      ],
    });
    render(<Chart />);

    expect(doughnut).toHaveBeenCalledWith(
      expect.objectContaining({
        data: {
          datasets: [
            {
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
              data: [200, 400],
            },
          ],
          labels: ['CMP', 'ULT'],
        },
        style: { maxHeight: '400px', maxWidth: '400px' },
        type: 'doughnut',
      }),
    );
  });
});
