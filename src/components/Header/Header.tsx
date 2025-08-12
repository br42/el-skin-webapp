// # import './Header.css';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCarrinhoContext } from 'context/CarrinhoContext';
import Carrinho from 'components/Carrinho/Carrinho';
import { styled } from 'styled-components';

const HeaderMain = styled.header`
  display: block;
  width: 100%;
  max-width: 100vw;
  max-height: auto;
  padding: 0px 0px;
  margin: 0px 0px;
  /*background-image: linear-gradient(180deg, #ffffff 0%, #eeeeee 100%);*/
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  width: 100vw;
  max-height: 64px;
  padding: 1rem 0;
  border-bottom: 1px solid #e5e5e5;
`;

const HeaderLogoDiv = styled.div`
  display: inline;
  color: #222222;
  padding: 0px;
  margin: 0px;
  margin-right: 20px;
  cursor: pointer;
`;

const HeaderLogo = styled.h1`
  display: inline;
  color: #222222;
  font-family: 'Shippori Antique', 'Franklin Gothic', 'MS Gothic', 'MS PGothic', 'MS UI Gothic', 'Roboto', 'Arial', sans-serif;
  font-size: 24px;
  padding: 0px;
  margin: 0px;
  margin-right: 20px;
`;

const HeaderSearchbox = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: #F5F6F5;
  /*border: solid 1px #333333;*/
  border: 1px solid #DEDEDE;
  max-width: 80vw;
  width: 60vw;
  min-width: 24rem;
  height: 4rex;
  border-radius: 8px;
  padding: 8px;
  color: inherit;
  position: relative;
  top: 0px;
  margin-right: 20px;
`;

const HeaderSearchboxInput = styled.input`
&, input&, input&[type="text"] {
  display: inline;
  background-color: #F5F6F5;
  /*border: solid 1px #333333;*/
  border: none 0px transparent;
  max-width: 75vw;
  width: 100%;
  min-width: 20rem;
  height: 3rex;
  border-radius: 8px;
  padding: 8px;
  color: inherit;
  position: relative;
  top: 0px;
  margin-right: 20px;
}

&:focus {
  border-color: #007bff;
}

&::placeholder, input&::placeholder {
  color: #9C9C9C;
  border: none 0px transparent;
}
`;

const HeaderLupa = styled.button`
  display: inline;
  max-height: 100%;
  max-width: 25%;
  font-size: 20px;
  margin: 2px 4px;
  color: #878787;
  border: none;
  background-color: transparent;
`;

const HeaderIconcart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #878787;
  cursor: pointer;
`;

const HeaderIconcartBadge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background-color: #ff4444;
  color: #FFFFFF;
  width: 1em;
  height: 1em;
  text-justify: center;
  border-radius: 50%;
  padding: 8px 8px;
  margin: 0px 0px;
  transform: translate(-4px, -12px);
  cursor: pointer;
`;

const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  max-width: 100vw;
  max-height: 32pt;
  padding: 8px 8px;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: left;
  max-width: 100vw;
  height: 32pt;
  padding: 8px 8px;
  
  & a, & h2 {
    cursor: pointer;
    text-decoration: none;
    color: #000000;
  }
`;

const HeaderAba = styled.h2`
  display: inline;
  margin-left: 12px;
  margin-right: 12px;
  font-weight: normal;
  font-size: 16pt;
`;

const HeaderAviso = styled.strong`
  display: inline;
  margin-left: 16px;
  margin-right: 16px;
  font-weight: bold;
  font-size: 12pt;
  color: #DC6060;
  cursor: pointer;
`;

function Header () {
  const [textoBusca, setTextoBusca] = useState('');
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
    <HeaderMain>
      <HeaderTop>
        <HeaderLogoDiv>
          <HeaderLogo>
            AL SKIN
          </HeaderLogo>
        </HeaderLogoDiv>
        <HeaderSearchbox>
          <HeaderSearchboxInput data-testid="header-searchboxinput" type="text" placeholder="O que você está procurando?" onChange={handleOnChange}>
          </HeaderSearchboxInput>
          <HeaderLupa data-testid="header-lupa" onClick={onClickSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </HeaderLupa>
        </HeaderSearchbox>
        <HeaderIconcart data-testid="header-iconcart" onClick={abrirCarrinho} >
          <FontAwesomeIcon icon={faCartShopping}/>
          { (carrinho?.getQuantidadeTotalItens() && carrinho?.getQuantidadeTotalItens()!==0) ?
            <HeaderIconcartBadge>
              <span> </span>
              <span>{carrinho?.getQuantidadeTotalItens()}</span>
            </HeaderIconcartBadge>
            : undefined
          }
        </HeaderIconcart>
      </HeaderTop>
      <HeaderBottom>
        <HeaderNav>
          <HeaderAba>
            Categorias
          </HeaderAba>
          <HeaderAba>
            Tipo de pele
          </HeaderAba>
          <HeaderAba>
            Necessidade
          </HeaderAba>
          <HeaderAba>
            Ingredientes
          </HeaderAba>
        </HeaderNav>
        
        <HeaderAviso>
          Hits até 50% OFF
        </HeaderAviso>
      </HeaderBottom>
      
      <Carrinho
        data-testid="carrinho-modal"
        isAberto={isCarrinhoAberto}
        onClose={fecharCarrinho}
      />
    </HeaderMain>
  );
}

export default Header;
