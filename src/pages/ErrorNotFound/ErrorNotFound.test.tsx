// # import { cleanup, render, screen } from '@testing-library/react';
import { cleanup, render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import ErrorNotFound from './ErrorNotFound';
import { Route, Routes } from 'react-router-dom';
import { act } from 'react';
import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Testando página "Error Not Found"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Deve renderizar tela "Error Not Found"', async () => {
    render(await act(() =>
      <Routes>
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    ));
    expect(screen.getByText(/404/i, {exact: false})).toBeInTheDocument();
    
    userEvent.click(screen.getByTestId('notfound-botao-voltar'));
    //expect();
    cleanup();
  });
});
