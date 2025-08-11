import { act, cleanup, render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import FaleConosco from './FaleConosco';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Testando página "Fale Conosco"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Deve renderizar tela "Fale Conosco"', async () => {
    render(await act(() =>
      <FaleConosco />
    ));
    expect(screen.getByText(/Fale Conosco/i, {exact: false})).toBeInTheDocument();
    cleanup();
  });
});
