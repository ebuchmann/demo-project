import React, { useState } from 'react';
import SelectField from './components/SelectField';
import SelectedItems from './components/SelectedItems';
import Chart from './components/Chart';

const App = () => (
  <>
    <SelectField />
    <SelectedItems />
    <Chart />
  </>
);

export default App;
