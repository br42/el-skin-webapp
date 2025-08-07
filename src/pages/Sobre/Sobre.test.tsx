import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sobre from './Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routerFutureConfig } from 'routes';
import { act } from 'react';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Testando página Sobre', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('tela "Sobre" deve ser renderizada', async () => {
    render(await act(() =>
      <BrowserRouter future={routerFutureConfig}>
        <Routes>
          <Route path="*" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    ));
    expect(screen.getByText(/Sobre a AL SKIN/i, {exact: false})).toBeInTheDocument();
    cleanup();
  });
});
