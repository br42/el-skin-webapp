import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

test('renders AL SKIN logo', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/AL SKIN/i);
  expect(linkElements[0]).toBeInTheDocument();
  cleanup();
});
