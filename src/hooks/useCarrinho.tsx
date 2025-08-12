import { useState, useCallback, useReducer } from 'react';

// # export type LitObject = {[key:string]: unknown};
export type CarrinhoItem = {
  id: string|number,
  name: string,
  quantidade: number,
  preco: number,
  image: string,
  url: string,
  // # [prop: string]: unknown
};

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

export function useCarrinhoCallbacks () : UseCarrinhoType {
  const [ itens, setItens ] = useState<CarrinhoItem[]>([]);
  const addItem = useCallback((novoItem: CarrinhoItem) : void => {
    if (itens.find((item) => (novoItem.id === item.id))) {
      setItens((atuaisItens) => atuaisItens.map((item) => (item.id === novoItem.id ? { ...item, quantidade: typeof(item.quantidade) == 'number' ? item.quantidade + 1 : 1 } : item)));
    } else {
      setItens((atuaisItens) => [ ...atuaisItens, { ...novoItem, quantidade: novoItem.quantidade || 1 } ]);
    }
  }, [itens]);
  
  const removeItem = useCallback((id: string|number) : void => {
    setItens((atuaisItens) => atuaisItens.filter((item) => (item.id !== id)));
  }, [setItens]);
  
  const setQuantidade = useCallback((id: string|number, quantidade: number) : void => {
    if (quantidade <= 0) {
      removeItem(id);
    } else {
      setItens((atuaisItens) => atuaisItens.map((item) => (item.id === id ? { ...item, quantidade: quantidade } : item)));
    }
  }, [setItens, removeItem]);
  
  const limparCarrinho = useCallback(() : void => {
    setItens([]);
  }, [setItens]);
  
  const getQuantidadeTotalItens = useCallback(() : number => {
    return itens.reduce((total, item) => (total + item.quantidade), 0);
  }, [itens]);
  
  const getPrecoTotal = useCallback(() : number => {
    return itens.reduce((total, item) => (total + item.quantidade * item.preco), 0);
  }, [itens]);
  
  return { itens: itens, addItem, removeItem, setQuantidade, limparCarrinho, getQuantidadeTotalItens, getPrecoTotal };
}

export default function useCarrinhoReduce () : UseCarrinhoType {
  const [ itens, dispatchItens ] = useReducer<CarrinhoItem[], [CarrinhoReducerAction]>(carrinhoReducer, []);
  const addItem = useCallback((novoItem: CarrinhoItem) : void => {
    dispatchItens({type: ADD_PRODUTO, payload: novoItem});
  }, [dispatchItens]);
  
  const removeItem = useCallback((id: string|number) : void => {
    dispatchItens({type: REMOVE_PRODUTO, payload: id});
  }, [dispatchItens]);
  
  const setQuantidade = useCallback((id: string|number, quantidade: number) : void => {
    dispatchItens({type: UPDATE_QUANTIDADE, payload: {id, quantidade}});
  }, [dispatchItens]);
  
  const limparCarrinho = useCallback(() : void => {
    dispatchItens({type: CLEAR_CARRINHO});
  }, [dispatchItens]);
  
  const getQuantidadeTotalItens = useCallback(() : number => {
    return itens.reduce((total, item) => (total + item.quantidade), 0);
  }, [itens]);
  
  const getPrecoTotal = useCallback(() : number => {
    return itens.reduce((total, item) => (total + item.quantidade * item.preco), 0);
  }, [itens]);
  
  return { itens: itens, addItem, removeItem, setQuantidade, limparCarrinho, getQuantidadeTotalItens, getPrecoTotal };
}
