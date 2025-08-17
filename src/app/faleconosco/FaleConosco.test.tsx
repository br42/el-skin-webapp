import { act, cleanup, render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import FaleConosco from './page';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');

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
