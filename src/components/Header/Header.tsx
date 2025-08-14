import './Header.css';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCarrinhoContext } from 'context/CarrinhoContext';
import Carrinho from 'components/Carrinho/Carrinho';
import { useBuscaContext } from 'context/BuscaContext';

function Header () {
  const { busca: textoBusca, setBusca: setTextoBusca } = useBuscaContext();
  const [isCarrinhoAberto, setIsCarinhoAberto] = useState(false);
  
  const carrinho = useCarrinhoContext();
  
  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setTextoBusca(e.target.value);
  }, [setTextoBusca]);
  
  const onClickSearch = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log(`Você pesquisou por: "${textoBusca}"${(event?.type==='') ? event : ''}`);
  }, [textoBusca]);
  
  const fecharCarrinho = useCallback(() => {
    setIsCarinhoAberto(false);
  }, [setIsCarinhoAberto]);
  
  const abrirCarrinho = useCallback(() => {
    setIsCarinhoAberto(true);
  }, [setIsCarinhoAberto]);
  
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo-div">
          <h1 className="header-logo">
            AL SKIN
          </h1>
        </div>
        <div className="header-searchbox">
          <input className="header-searchboxinput" data-testid="header-searchboxinput" type="text" placeholder="O que você está procurando?" onChange={handleOnChange}>
          </input>
          <button className="header-lupa" data-testid="header-lupa" onClick={onClickSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="header-iconcart"  data-testid="header-iconcart" onClick={abrirCarrinho} >
          <FontAwesomeIcon icon={faCartShopping}/>
          { (carrinho?.getQuantidadeTotalItens() && carrinho?.getQuantidadeTotalItens()!==0) ?
            <div className="header-iconcart-badge">
              <span> </span>
              <span>{carrinho?.getQuantidadeTotalItens()}</span>
            </div>
            : undefined
          }
        </div>
      </div>
      <div className="header-bottom">
        <nav className="header-nav">
          <h2 className="header-aba">
            Categorias
          </h2>
          <h2 className="header-aba">
            Tipo de pele
          </h2>
          <h2 className="header-aba">
            Necessidade
          </h2>
          <h2 className="header-aba">
            Ingredientes
          </h2>
        </nav>
        
        <strong className="header-aviso">
          Hits até 50% OFF
        </strong>
      </div>
      
      <Carrinho
        data-testid="carrinho-modal"
        isAberto={isCarrinhoAberto}
        onClose={fecharCarrinho}
      />
    </header>
  );
}

export default Header;
