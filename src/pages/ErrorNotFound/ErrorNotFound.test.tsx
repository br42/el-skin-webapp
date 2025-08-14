import { act, cleanup, render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ErrorNotFound from './ErrorNotFound';

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
      <ErrorNotFound />
    ));
    expect(screen.getByText(/404/i, {exact: false})).toBeInTheDocument();
    
    userEvent.click(screen.getByTestId('notfound-botao-voltar'));
    //expect();
    cleanup();
  });
});
