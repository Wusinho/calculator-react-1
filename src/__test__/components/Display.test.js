import React from 'react';
import { create } from 'react-test-renderer';
import Display from '../../components/Display';

it('Should render correctly', () => {
  const elem = create(<Display result="Some value" />);
  expect(elem).toMatchSnapshot();
});
