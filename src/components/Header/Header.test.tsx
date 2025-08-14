import { useSearch } from 'hooks/useSearch';
import Header from './Header';
import { act, cleanup, mockGetListaProdutos, render, renderHook, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import { ProductCardItem } from 'service/productService';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
const mockProductService = jest.fn();
jest.mock('service/productService.ts');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

mockProductService.mockImplementation(() => ({
  // # ...jest.requireActual('service/productService.ts'),
  productService: {
    getProducts: async (): Promise<ProductCardItem[]> => {
      return mockGetListaProdutos();
    },
    getProductById: async (id: string|number): Promise<ProductCardItem> => {
      const produto = mockGetListaProdutos().find((item) => item.id === id);
      if (produto === undefined) {
        throw Error('Erro 404: Produto não encontrado');
      }
      return produto;
    }
  }
}));

describe('Testando componente "Header"', () => {
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
    
    userEvent.type(searchbox, 'creme');
    userEvent.click(iconelupa);
    
    expect(searchbox).toHaveValue('creme');
    
    renderHook(async () => await act(async () => {
      const { busca } = useSearch();
      expect(busca).toBe('creme');
    }));
    
    cleanup();
  });
});
