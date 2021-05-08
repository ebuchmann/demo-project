import React, { FC, useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useSearchSymbolsLazyQuery } from '../gql/generated';
import { useDebounce } from '../hooks';
import { useStore, shallow } from '../store';

const SelectField: FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [selections, setSelections] = useStore(
    (state) => [state.selections, state.setSelections],
    shallow,
  );
  const [handleSearch, { data, loading }] = useSearchSymbolsLazyQuery();
  const options = data?.searchSymbols || [];
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedValue) {
      handleSearch({ variables: { keywords: debouncedValue } });
    }
  }, [handleSearch, debouncedValue]);

  const onChange = (_event, newValues) => {
    console.log(newValues);
    if (newValues.length <= 3) setSelections(newValues);
  };

  return (
    <Autocomplete
      multiple
      loading={loading}
      disableCloseOnSelect={true}
      open={opened}
      onOpen={setOpened.bind(this, true)}
      onClose={setOpened.bind(this, false)}
      options={options}
      value={selections}
      onChange={onChange}
      getOptionLabel={(option) => option.name}
      filterOptions={createFilterOptions({
        matchFrom: 'any',
        stringify: (option) => option.name + ' ' + option.symbol,
      })}
      renderOption={(option) => (
        <React.Fragment>
          <strong>{option.symbol}</strong> || {option.name}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search for symbol or name..."
          variant="outlined"
        />
      )}
    />
  );
};

export default SelectField;
