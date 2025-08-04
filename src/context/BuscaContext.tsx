import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type ObjetoBusca = {
  busca: string;
  setBusca: (item: string|((state:string)=>string)) => void;
};

const BuscaContext = createContext<ObjetoBusca|undefined>(undefined);

const BuscaContextProvider = ({children} : {children?: ReactNode}) => {
  const [busca, setBusca] = useState<string>('');
  const contexto = useMemo(() => ({
    busca,
    setBusca
  }), [busca]);
  
  return <BuscaContext value={contexto}>
    {children}
  </BuscaContext>;
};

export const useBuscaContext = () => {
  const contexto = useContext(BuscaContext);
  
  if (!contexto) {
    throw new Error('useBuscaContext deve ser usado dentro de um BuscaContextProvider');
  }
  
  return contexto;
};

export default BuscaContextProvider;