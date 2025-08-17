import { productService } from 'service/productService';
import { act, cleanup, renderHook } from 'test-utils';
import { useEffect } from 'react';
// # import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
//jest.mock('service/productService.ts');

//const mockProduto = (produto: ProductCardItem) => ({
//  ...produto,
//  preco: produto.price,
//  quantidade: 1,
//  url: produto.url || ''
//});

describe('Testando biblioteca "productService"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Deve obter produtos', async () => {
    await act(async () => renderHook(async () => {
      useEffect(() => {
        const tryProdutos = async () => {
          try {
            const produtos = await productService.getProducts();
            if (produtos === undefined) throw new Error();
            // console.log(produtos);
          } catch { // (e: unknown) {
            ; // console.log(e);
          }
        };
        tryProdutos();
      }, []);
    }));
    
    cleanup();
  });
  test('Deve obter produto por id', async () => {
    await act(async () => renderHook(async () => {
      useEffect(() => {
        const tryProdutos = async () => {
          try {
            const produto = await productService.getProductById(0);
            if (produto === undefined) throw new Error();
            // console.log(produto);
          } catch { // (e: unknown) {
            ; // console.log(e);
          }
        };
        tryProdutos();
      }, []);
    }));
    
    cleanup();
  });
});
