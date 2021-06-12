import React from 'react';
import { create } from 'react-test-renderer';

import Button from '../../components/Button';

it('Should renders correctly', () => {
  const elem = create(<Button buttonName="button" clickHandler={() => 'this is a button'} />);
  expect(elem).toMatchSnapshot();
});
