import { createContext, useContext, ReactNode } from 'react';
import useCarrinho from '../hooks/useCarrinho';

export const CarrinhoContext = createContext<Record<string,unknown>|undefined>(undefined as Record<string,unknown>|undefined);

//export const CarrinhoContextProvider = useCarrinho();

export const CarrinhoContextProvider = ({children} : {children?: ReactNode}) => {
  const carrinho = useCarrinho();
  
  return <CarrinhoContext value={carrinho}>
    {children}
  </CarrinhoContext>;
};

export const useCarrinhoContext = () : Record<string,unknown> => {
  const contexto = useContext<Record<string,unknown>|undefined>(CarrinhoContext);
  
  if (!contexto) {
    throw Error('useCarrinhoContext foi chamado fora de um CarrinhoContextProvider');
  }
  
  return contexto;
};

export default CarrinhoContextProvider; 