import './Header.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header () {
  const [textoBusca, setTextoBusca] = useState('');
  
  function onClickSearch(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    console.log(`Você pesquisou por: ${textoBusca}`, (event===undefined) ? event : undefined);
  }
  
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTextoBusca(e.target.value);
  }
  
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
          <FontAwesomeIcon icon={faCartShopping} onClick={undefined} />
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
    </header>
  );
}

export default Header;
