import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sobre from './Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routerFutureConfig } from 'routes';

test('tela "Sobre" deve ser renderizada', () => {
  render(
    <BrowserRouter future={routerFutureConfig}>
      <Routes>
        <Route path="*" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
  expect(screen.getByText(/Sobre a AL SKIN/i, {exact: false})).toBeInTheDocument();
  cleanup();
});
