import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { addItem, CarrinhoItem, clearCart, removeItem, updateQuantity } from 'store/slices/cartSlice';

export type UseCarrinhoType = {
  itens: CarrinhoItem[],
  addItem: (novoItem: CarrinhoItem) => void,
  removeItem: (id: string|number) => void,
  setQuantidade: (id: string|number, quantidade: number) => void,
  limparCarrinho: () => void,
  getQuantidadeTotalItens: () => number,
  getPrecoTotal: () => number
};

export const ADD_PRODUTO = 'ADD_PRODUTO';
export const REMOVE_PRODUTO = 'REMOVE_PRODUTO';
export const UPDATE_QUANTIDADE = 'UPDATE_QUANTIDADE';
export const CLEAR_CARRINHO = 'CLEAR_CARRINHO';

type CarrinhoState = CarrinhoItem[];
type CarrinhoReducerActionType = typeof ADD_PRODUTO|typeof REMOVE_PRODUTO|typeof UPDATE_QUANTIDADE|typeof CLEAR_CARRINHO;
type CarrinhoReducerAction = { type: CarrinhoReducerActionType, payload?: CarrinhoItem|string|number|{id: string|number, quantidade: number} }

export const carrinhoReducer = (state: CarrinhoState, action: CarrinhoReducerAction) => {
  switch (action.type) {
    case ADD_PRODUTO: {
      if (!action.payload || typeof(action.payload)==='string' || typeof(action.payload)==='number') {
        throw new Error(`Erro: carrinhoReducer: action.payload da action ${action.type} está vazio ou com tipo incorreto! Tipo: "${typeof action.payload}"`);
      }
      const novoProduto = action.payload as CarrinhoItem;
      const produto = state.findIndex((item) => item.id === novoProduto.id);
      if (produto === -1) {
        novoProduto.quantidade = 1;
        return [...state, novoProduto];
      } else {
        return state.map((item, index) =>
          index === produto
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
    }
    case REMOVE_PRODUTO: {
      if (!action.payload || (typeof(action.payload)!=='string' && typeof(action.payload)!=='number')) {
        throw new Error(`Erro: carrinhoReducer: action.payload da action ${action.type} está vazio ou com tipo incorreto! Tipo: "${typeof action.payload}"`);
      }
      const produtoId = action.payload;
      return state.filter((item) => item.id !== produtoId);
    }
    case UPDATE_QUANTIDADE: {
      if (!action.payload || typeof(action.payload)==='string' || typeof(action.payload)==='number') {
        throw new Error(`Erro: carrinhoReducer: action.payload da action ${action.type} está vazio ou com tipo incorreto! Tipo: "${typeof action.payload}"`);
      }
      const { id, quantidade } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, quantidade } : item
      );
    }
    case CLEAR_CARRINHO: {
      return [];
    }
    default:
      return state;
  }
};

export function useCarrinhoReduce () : UseCarrinhoType {
  const dispatchItens = useDispatch<AppDispatch>();
  const itens = useSelector((state: RootState) => state.cart.itens);
  
  //const [ itens, dispatchItens ] = useReducer<CarrinhoItem[], [CarrinhoReducerAction]>(carrinhoReducer, []);
  
  const handleAddItem = useCallback((novoItem: Omit<CarrinhoItem, 'quantidade'>) : void => {
    dispatchItens(addItem(novoItem));
  }, [dispatchItens]);
  
  const handleRemoveItem = useCallback((id: string|number) : void => {
    dispatchItens(removeItem({id}));
  }, [dispatchItens]);
  
  const handleSetQuantidade = useCallback((id: string|number, quantidade: number) : void => {
    dispatchItens(updateQuantity({id, quantidade}));
  }, [dispatchItens]);
  
  const handleLimparCarrinho = useCallback(() : void => {
    dispatchItens(clearCart());
  }, [dispatchItens]);
  
  const getQuantidadeTotalItens = useCallback(() : number => {
    return itens.reduce((total, item) => (total + item.quantidade), 0);
  }, [itens]);
  
  const getPrecoTotal = useCallback(() : number => {
    return itens.reduce((total, item) => (total + item.quantidade * item.preco), 0);
  }, [itens]);
  
  return {
    itens: itens,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    setQuantidade: handleSetQuantidade,
    limparCarrinho: handleLimparCarrinho,
    getQuantidadeTotalItens,
    getPrecoTotal
  };
}

export const useCarrinho = useCarrinhoReduce;
export default useCarrinho;
