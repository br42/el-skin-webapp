import { carouselService } from 'service/carouselService';
import { act, cleanup, renderHook } from 'test-utils';
import { useEffect } from 'react';
// # import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
//jest.mock('service/carouselService.ts');
//jest.mock('service/productService.ts');

//const mockProduto = (produto: ProductCardItem) => ({
//  ...produto,
//  preco: produto.price,
//  quantidade: 1,
//  url: produto.url || ''
//});

describe('Testando biblioteca "carouselService"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Deve obter itens', async () => {
    await act(async () => renderHook(async () => {
      useEffect(() => {
        const tryItens = async () => {
          try {
            const itens = await carouselService.getCarouselItems();
            if (itens === undefined) throw new Error();
            // console.log(produtos);
          } catch { // (e: unknown) {
            ; // console.log(e);
          }
        };
        tryItens();
      }, []);
    }));
    
    cleanup();
  });
});
