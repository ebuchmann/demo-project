import React, { FC, useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import styled from '@emotion/styled';
import { useSearchSymbolsLazyQuery } from '../gql/generated';
import { useDebounce } from '../hooks';
import { useStore, shallow } from '../store';

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const OptionSymbol = styled.div`
  margin-left: auto;
  font-weight: bold;
`;

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
      style={{ maxWidth: '800px', marginBottom: '48px', backgroundColor: 'white' }}
      getOptionSelected={(option, value) => option.symbol === value.symbol}
      filterOptions={createFilterOptions({
        matchFrom: 'any',
        stringify: (option) => option.name + ' ' + option.symbol,
      })}
      renderOption={(option, { selected }) => (
        <OptionContainer>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
          <OptionSymbol>{option.symbol}</OptionSymbol>
        </OptionContainer>
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

SelectField.displayName = 'SelectField';
export default SelectField;
