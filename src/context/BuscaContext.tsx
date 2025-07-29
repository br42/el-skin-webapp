import { createContext, ReactNode, useMemo, useState } from 'react';

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

export default BuscaContextProvider;