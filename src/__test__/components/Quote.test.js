import React from 'react';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../../components/Quote';

it('Should render Quote page', () => {
  const elem = create(<Quote />).toJSON();
  expect(elem).toMatchSnapshot();
});
it('Should render quotes', () => {
  render(<Quote />);
  const elem = screen.getByText('There is no good and bad');
  expect(elem).toBeInTheDocument();
});
