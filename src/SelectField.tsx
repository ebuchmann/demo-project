import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSearchSymbolsQuery } from './gql/generated';

interface Props {
  name?: String;
}

const SelectField: React.FC<Props> = () => {
  const [opened, setOpened] = useState(false);
  const { data } = useSearchSymbolsQuery({ variables: { keywords: 'IBM' } });
  const options = ['one', 'two'];

  console.log(data);
  return (
    <Autocomplete
      onOpen={setOpened.bind(this, true)}
      onClose={setOpened.bind(this, false)}
      options={options}
      renderInput={(params) => <TextField {...params} label="Asynchronous" variant="outlined" />}
    />
  );
};

export default SelectField;
