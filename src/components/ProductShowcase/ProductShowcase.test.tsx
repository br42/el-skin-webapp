import { act, cleanup, mockGetListaProdutos, render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import ProductShowcase from './ProductShowcase';
import { ProductCardItem } from 'service/productService';
import userEvent from '@testing-library/user-event';
// # import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
//jest.mock('service/productService.ts');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

const mockProductService = jest.fn();
jest.setMock('service/productService.ts', mockProductService);

describe('Testando componente "ProductShowcase"', () => {
  //afterEach(() => {
  //  jest.restoreAllMocks();
  //});
    
  test('Componente "ProductShowcase" sem produto válido deve ser renderizado', async () => {

    mockProductService.mockImplementation(() => ({
      // # ...jest.requireActual('service/productService.ts'),
      productService: {
        getProducts: async (): Promise<ProductCardItem[]> => {
          return [];
        },
        getProductById: async (id: string|number): Promise<ProductCardItem> => {
          const produto = [].find((item: ProductCardItem) => item.id === id);
          if (produto === undefined) {
            throw Error('Erro 404: Produto não encontrado');
          }
          return produto;
        }
      }
    }));
    
    await act(async () => render(
      await act(async () => 
        <ProductShowcase debugProdutos={[]} />
      )
    ));
    
    expect(screen.queryAllByText('comprar').length).toBe(0);
    cleanup();
  });
});

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

describe('Testando componente "ProductShowcase"', () => {
  //afterEach(() => {
  //  jest.restoreAllMocks();
  //});
  
  test('Componente "ProductCard" com produtos válidos deve ser renderizado', async () => {
    expect(mockGetListaProdutos().length).toBe(8);
    await act(async () => render(
      <ProductShowcase debugProdutos={mockGetListaProdutos()} />
    ));
    expect(screen.queryAllByText('comprar').length).toBe(8);
    cleanup();
  });
  
  test('Componente "ProductShowcase" com produtos válidos deve renderizar os cartões de produtos corretamente', async () => {
    await act(async () => render(
      <ProductShowcase debugProdutos={mockGetListaProdutos()} />
    ));
    expect(screen.queryAllByText('comprar').length).toBe(8);
    expect(screen.getByText('Creme Hidratante Facial')).toBeInTheDocument();
    
    cleanup();
  });
  
  test('Componente "ProductShowcase" com produtos válidos deve realizar ação de compra', async () => {
    await act(async () => render(
      <ProductShowcase debugProdutos={mockGetListaProdutos()} />
    ));
    expect(screen.queryAllByText('comprar').length).not.toBe(0);
    
    userEvent.click(screen.queryAllByText('comprar')[0]);
    
    cleanup();
  });
});
