import "./Header.css";
import { useState, /*useEffect*/ } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
//import IconeBolsa from "../../assets/bolsa.svg";
//import IconeLupa from "../../assets/lupa.svg";
//import Logo from "../../assets/logo.svg";

function Header () {
  const [textoBusca, setTextoBusca] = useState('');
  
  function onClickSearch(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    console.log(`Você pesquisou por: ${textoBusca}`);
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
          {
          //<h1 className="Header-logo">
          //  AL SKIN
          //</h1>
          }
          {
          //<img alt="AL SKIN" src={Logo} className="header-logo" />
          }
        </div>
        <div className="header-searchbox">
          <input className="header-searchboxinput" type="text" placeholder="O que você está procurando?" onChange={handleOnChange}>
          </input>
          <button className="header-lupa" onClick={onClickSearch}>
            <FontAwesomeIcon icon={faSearch} />
            {
            //<img alt="Pesquisar" src={IconeLupa} className="header-lupa" />
            }
          </button>
        </div>
        <div className="header-iconcart">
          <FontAwesomeIcon icon={faCartShopping} />
          {
          //<img alt="IconeBolsa" src={IconeBolsa} />
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
    </header>
  );
}

export default Header;

/*
import React from 'react';
import './Header.css';
 
function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="logo">
            <span>AL SKIN</span>
          </div>
 
          <div className="search-bar">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="search-input"/>
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
 
          <div className="header-actions">
            <button className="cart-button">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
 
      <nav className="header-nav">
      </nav>
    </header>
  );
}
 
export default Header;
*/
