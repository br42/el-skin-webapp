import { useState, useCallback } from 'react';

// # export type LitObject = {[key:string]: unknown};
export type CarrinhoItem = {
  id: string,
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
  removeItem: (id: string) => void,
  setQuantidade: (id: string, quantidade: number) => void,
  limparCarrinho: () => void,
  getQuantidadeTotalItens: () => number,
  getPrecoTotal: () => number
};

export default function useCarrinho () : UseCarrinhoType {
  const [ itens, setItens ] = useState<CarrinhoItem[]>([]);
  const addItem = useCallback((novoItem: CarrinhoItem) : void => {
    if (itens.find((item) => (novoItem.id === item.id))) {
      setItens((atuaisItens) => atuaisItens.map((item) => (item.id === novoItem.id ? { ...item, quantidade: typeof(item.quantidade) == 'number' ? item.quantidade + 1 : 1 } : item)));
    } else {
      setItens((atuaisItens) => [ ...atuaisItens, { ...novoItem, quantidade: novoItem.quantidade || 1 } ]);
    }
  }, [itens]);
  
  const removeItem = useCallback((id: string) : void => {
    setItens((atuaisItens) => atuaisItens.filter((item) => (item.id !== id)));
  }, [setItens]);
  
  const setQuantidade = useCallback((id: string, quantidade: number) : void => {
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
