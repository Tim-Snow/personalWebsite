import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('works', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Tim Snow/i)).toBeInTheDocument();
});
