import { useSearch } from 'hooks/useSearch';
import Header from './Header';
import { act, cleanup, render, renderHook, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');

describe('Testando componente "Header"', () => {
  beforeEach(() => {
    ;
  });
  afterEach(() => {
    //jest.restoreAllMocks();
  });
  test('Deve conter modal de Carrinho', async () => {
    await act(() => render(
      <Header />
    ));
    
    const carrinho = screen.getByTestId('carrinho-modal');
    expect(carrinho).toBeInTheDocument();
    
    cleanup();
  });
  test('Deve conter modal de Carrinho', async () => {
    const HeaderMock = () => (<Header />);
    
    await act(() => render(
      <HeaderMock />
    ));
    
    const carrinhoModal = screen.getByTestId('carrinho-modal');
    expect(carrinhoModal).toBeInTheDocument();
    
    cleanup();
  });
  test('Deve executar Busca', async () => {
    await act(async () => render(
      <Header />
    ));
    
    const searchbox = screen.getByTestId('header-searchboxinput');
    const iconelupa = screen.getByTestId('header-lupa');
    
    const valoresperado = 'creme';
    
    await act(async () => userEvent.type(searchbox, valoresperado));
    await act(async () => userEvent.click(iconelupa));
    
    expect(searchbox).toHaveValue(valoresperado);
    
    await act(async () => renderHook(async () => {
      const { busca } = useSearch();
      expect(busca).toBe(valoresperado);
    }));
    
    cleanup();
  });
});
