import { act, cleanup, render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import Sobre from './Sobre';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Testando página "Sobre"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Deve renderizar tela "Sobre"', async () => {
    render(await act(() =>
      <Sobre />
    ));
    expect(screen.getByText(/Sobre a AL SKIN/i, {exact: false})).toBeInTheDocument();
    cleanup();
  });
});
