import { renameKeys } from './utils';

describe(renameKeys, () => {
  it('renames keys', () => {
    const data = renameKeys({ '01. weird key': 'some data' }, { '01. weird key': 'weirdKey' });

    expect(data).toEqual({ weirdKey: 'some data' });
  });
});
