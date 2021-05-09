import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import SelectField from './components/SelectField';
import SelectedItems from './components/SelectedItems';
import Chart from './components/Chart';

const OuterContainer = styled.div`
  height: 100%;
  background-color: #efefef;
  overflow: scroll;
`;

const Container = styled.div`
  padding: 32px;
`;

const App: FC = () => (
  <OuterContainer>
    <Container>
      <Typography variant="h4">Stock Comparison</Typography>
      <Typography variant="body1" style={{ marginBottom: '16px' }}>
        Choose up to three stocks to compare
      </Typography>
      <SelectField />
      <SelectedItems />
      <Chart />
    </Container>
  </OuterContainer>
);

App.displayName = 'App';
export default App;
