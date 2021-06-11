import React from 'react';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/Home';

it('Should render Home page', () => {
  const elem = create(<Home />).toJSON();
  expect(elem).toMatchSnapshot();
});
it('Should render header section', () => {
  render(<Home />);
  const elem = screen.getByText('Welcome to Math-Magicians');
  expect(elem).toBeInTheDocument();
});
