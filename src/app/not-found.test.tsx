import { act, cleanup, render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ErrorNotFound from './not-found';

jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');

const mockRouter = jest.fn(()=>({
  back: jest.fn(()=>undefined)
}));
const mockPathname = jest.fn(() => '/');
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => mockRouter(),
  usePathname: () => mockPathname()
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
