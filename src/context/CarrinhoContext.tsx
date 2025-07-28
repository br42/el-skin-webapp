import React, { createContext, ReactNode, FC } from 'react';
import useCarrinho from '../hooks/useCarrinho';

const CarrinhoContext = createContext<Record<string,unknown>|unknown>(undefined);

export const CarrinhoContextProvider : FC<{children: ReactNode}> = ({children} : {children: ReactNode}) => {
  const carrinho = useCarrinho();
  
  return <CarrinhoContext value={carrinho}>
    {children}
  </CarrinhoContext>;
};

export default CarrinhoContextProvider;