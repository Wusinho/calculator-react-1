import React from 'react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../../components/App';

test('renders correctly', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
