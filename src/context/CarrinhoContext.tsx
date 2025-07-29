import { createContext, useContext, ReactNode } from 'react';
import useCarrinho, { UseCarrinhoType } from '../hooks/useCarrinho';

export const CarrinhoContext = createContext<UseCarrinhoType|undefined>(undefined);

//export const CarrinhoContextProvider = useCarrinho();

export const CarrinhoContextProvider = ({children} : {children?: ReactNode}) => {
  const carrinho = useCarrinho();
  
  return <CarrinhoContext value={carrinho}>
    {children}
  </CarrinhoContext>;
};

export const useCarrinhoContext = () : UseCarrinhoType => {
  const contexto = useContext<UseCarrinhoType|undefined>(CarrinhoContext);
  
  if (!contexto) {
    throw Error('useCarrinhoContext foi chamado fora de um CarrinhoContextProvider');
  }
  
  return contexto;
};

export default CarrinhoContextProvider; 