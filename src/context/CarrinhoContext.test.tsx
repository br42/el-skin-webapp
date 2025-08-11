import { CarrinhoContextProvider } from './CarrinhoContext';
import { act, cleanup, renderHook } from 'test-utils';
import {  } from 'react';
import Carrinho from 'components/Carrinho/Carrinho';
// # import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Testando componente "CarrinhoContext"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Deve prover Carrinho dentro de um CarrinhoContext', async () => {
    await act(async () => renderHook(async () => {
      return (
        <CarrinhoContextProvider>
          <Carrinho isAberto={true} onClose={jest.fn()} />
        </CarrinhoContextProvider>
      );
    }));
    
    cleanup();
  });
});
