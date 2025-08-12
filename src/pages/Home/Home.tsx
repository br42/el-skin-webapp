import Carousel from 'components/Carousel/Carousel';
import ProductShowcase from 'components/ProductShowcase/ProductShowcase';
import { styled } from 'styled-components';
import { Pagina } from 'styles/GlobalStyle';
// # import './Home.css';

const HomeBannerCompra = styled.div`
  background-color: #DB995D;
  width: calc(100dvw - 64px);
  max-width: 100%;
  padding: 8px 32px;
  margin: 0px 0px;

& * {
  background-color: default;
}
`;

const HomeBannerMensagemPrimeiraCompra = styled.strong`
  color: #FFFFFF;
  font-weight: 700;
  margin-right: 32px;
`;

const HomeBannerMensagemDesconto = styled.span`
  color: #000000;
  margin-right: 32px;
`;

const HomeBannerBotaoCompra = styled.button`
  background-color: #FFFFFF;
  color: #000000;
  border: solid 0px #C3C3C3;
  border-radius: 8px;
  padding: 2px 16px;
  margin: 0px 0px;
  cursor: pointer;
`;

function Home() {
  return (
    <>
      <HomeBannerCompra data-testid="banner-compra">
        <HomeBannerMensagemPrimeiraCompra>primeira compra?</HomeBannerMensagemPrimeiraCompra>
        <HomeBannerMensagemDesconto className="banner-mensagem-desconto"><strong>R$25 OFF</strong> A PARTIR DE <strong>R$ 200</strong></HomeBannerMensagemDesconto>
        <HomeBannerBotaoCompra><strong>PRIMEIRA25</strong></HomeBannerBotaoCompra>
      </HomeBannerCompra>
      <Pagina>
        <Carousel />
        <ProductShowcase />
      </Pagina>
    </>
  );
}

export default Home;
