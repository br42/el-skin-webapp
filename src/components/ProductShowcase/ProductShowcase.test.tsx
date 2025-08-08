// # import { cleanup, render, screen } from '@testing-library/react';
import { cleanup, render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import ProductShowcase from './ProductShowcase';
import ProductCard from 'components/ProductCard/ProductCard';
import { ProductCardItem, ProductCardTag } from 'service/productService';
import { act } from 'react';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import BuscaContextProvider from 'context/BuscaContext';
import CarrinhoContextProvider from 'context/CarrinhoContext';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

const getProduto = () : ProductCardItem => {
  return {
    'id': 1,
    'name': 'Creme Hidratante Facial',
    'description': 'Creme nutritivo para hidratação profunda da pele do rosto, com extrato de aloe vera.',
    'price': 45.99,
    'image': 'assets/images/prod1.jpg',
    'tags': [
      { 'name': 'face', 'bgcolor': '#5DD4DB', 'fgcolor': '#FFFFFF' },
      { 'name': 'hydration', 'bgcolor': '#DB5DB1', 'fgcolor': '#FFFFFF' }
    ] as ProductCardTag[]
  };
};
const onCliqueProduto = jest.fn();
const onCliqueComprar = jest.fn();

describe('Testando componente "ProductShowcase"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Componente "ProductShowcase" sem produto válido deve ser renderizado', async () => {
    render(
      await act(async () => 
        <Routes>
          <Route path="*" element={
            <BuscaContextProvider>
              <CarrinhoContextProvider>
                <ProductShowcase />
              </CarrinhoContextProvider>
            </BuscaContextProvider>
          } />
        </Routes>
      )
    );
    expect(screen.queryAllByText('comprar').length).toBe(0);
    cleanup();
  });
  test('Componente "ProductCard" sem produto válido deve ser renderizado', async () => {
    render(
      await act(async () => 
        <Routes>
          <Route path="*" element={
            <ProductCard id={1} product={undefined as unknown as ProductCardItem} 
              onCliqueProduto={onCliqueProduto}
              onCliqueComprar={onCliqueComprar}
            />
          } />
        </Routes>
      )
    );
    expect(screen.queryAllByText('comprar').length).toBe(0);
    cleanup();
  });
  test('Componente "ProductCard" com produto válido deve ser renderizado', async () => {
    render(
      await act(async () => 
        <Routes>
          <Route path="*" element={
            <ProductCard id={1} product={getProduto()} 
              onCliqueProduto={onCliqueProduto}
              onCliqueComprar={onCliqueComprar}
            />
          } />
        </Routes>
      )
    );
    expect(screen.getByText('comprar')).toBeInTheDocument();
    expect(screen.getByText('Creme Hidratante Facial')).toBeInTheDocument();
    
    expect(screen.getByTestId('productcard')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('productcard'));
    expect(onCliqueProduto).toBeCalledTimes(1);
    
    expect(screen.getByTestId('productcard-button-comprar')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('productcard-button-comprar'));
    expect(onCliqueComprar).toBeCalledTimes(1);
    
    cleanup();
  });
});
