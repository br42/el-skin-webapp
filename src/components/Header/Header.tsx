import './Header.css';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Carrinho from '../Carrinho/Carrinho';

function Header () {
  const [textoBusca, setTextoBusca] = useState('');
  const [isCarrinhoAberto, setIsCarinhoAberto] = useState(false);
  
  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setTextoBusca(e.target.value);
  }, [setTextoBusca]);
  
  const onClickSearch = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log(`Você pesquisou por: ${textoBusca}`, (event===undefined) ? event : undefined);
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
          <input className="header-searchboxinput" type="text" placeholder="O que você está procurando?" onChange={handleOnChange}>
          </input>
          <button className="header-lupa" onClick={onClickSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="header-iconcart">
          <FontAwesomeIcon icon={faCartShopping} onClick={abrirCarrinho} />
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
        isAberto={isCarrinhoAberto}
        onClose={fecharCarrinho}
      />
    </header>
  );
}

export default Header;
