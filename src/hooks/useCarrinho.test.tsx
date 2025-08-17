import { ProductCardItem } from 'service/productService';
import useCarrinho from './useCarrinho';
import { act, cleanup, mockGetListaProdutos, renderHook } from 'test-utils';
import { useRef } from 'react';
// # import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');

const mockProduto = (produto: ProductCardItem) => ({
  ...produto,
  preco: produto.price,
  quantidade: 1,
  url: produto.url || ''
});

describe('Testando hook "useCarrinho"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Deve executar Carrinho', async () => {
    await act(async () => renderHook(async () => {
      const state = useRef(0);
      
      const carrinho = useCarrinho();
      
      switch (state.current) {
        case 0: {
          
          carrinho.addItem(mockProduto(mockGetListaProdutos()[0]));
          carrinho.addItem(mockProduto(mockGetListaProdutos()[1]));
          carrinho.addItem(mockProduto(mockGetListaProdutos()[2]));
          carrinho.addItem(mockProduto(mockGetListaProdutos()[2]));
          
          carrinho.setQuantidade(1, 3);
          
          carrinho.addItem(mockProduto(mockGetListaProdutos()[3]));
          carrinho.setQuantidade(4, 0);
          
          expect(carrinho.getPrecoTotal()).toBe(0);
          expect(carrinho.getQuantidadeTotalItens()).toBe(0);
          
          carrinho.removeItem(3);
          carrinho.removeItem(1);
          
          carrinho.limparCarrinho();
          expect(carrinho.itens.length).toBe(0);
          expect(carrinho.getQuantidadeTotalItens()).toBe(0);
          
          state.current++;
          break;
        }
        default: {
          break;
        }
      }
      return null;
    }));
    
    cleanup();
  });
});
