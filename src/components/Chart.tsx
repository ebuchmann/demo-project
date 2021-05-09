import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { useStore, shallow } from '../store';
import { Doughnut } from 'react-chartjs-2';

const backgroundColor = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'];

const Chart: FC = () => {
  const [chartEps] = useStore((state) => [state.chartEps], shallow);
  const data = chartEps.map(({ eps }) => eps);
  const labels = chartEps.map(({ symbol }) => symbol);

  if (labels.length === 0) return null;

  return (
    <>
      <Typography variant="h6">EPS comparison</Typography>
      <Doughnut
        style={{ maxWidth: '400px', maxHeight: '400px' }}
        type="doughnut"
        data={{
          datasets: [
            {
              data,
              backgroundColor,
            },
          ],
          labels,
        }}
      />
    </>
  );
};

Chart.displayName = 'Chart';
export default Chart;
