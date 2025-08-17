import { act, cleanup, render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';
import { ProductCardItem, ProductCardTag } from 'service/productService';
import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');

const getProduto = (() : ProductCardItem => {
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
});
const onCliqueProduto = jest.fn();
const onCliqueComprar = jest.fn();

describe('Testando componente "ProductCard"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Componente "ProductCard" sem produto válido deve ser renderizado', async () => {
    render(
      await act(async () => 
        <ProductCard id={1} product={undefined as unknown as ProductCardItem} 
          onCliqueProduto={onCliqueProduto}
          onCliqueComprar={onCliqueComprar}
        />
      )
    );
    expect(screen.queryAllByText('comprar').length).toBe(0);
    cleanup();
  });
  test('Componente "ProductCard" com produto válido deve ser renderizado', async () => {
    render(
      await act(async () => 
        <ProductCard id={1} product={getProduto()} 
          onCliqueProduto={onCliqueProduto}
          onCliqueComprar={onCliqueComprar}
        />
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
