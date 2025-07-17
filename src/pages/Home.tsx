import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import ProductShowcase from '../components/ProductShowcase/ProductShowcase';
import './Home.css';

function Home() {
  return (
    <>
      <div className="banner-compra">
        <strong className="banner-mensagem-primeira-compra">primeira compra?</strong>
        <span className="banner-mensagem-desconto"><strong>R$25 OFF</strong> A PARTIR DE <strong>R$ 200</strong></span>
        <button className="banner-botao-compra"><strong>PRIMEIRA25</strong></button>
      </div>
      <div className="pagina">
        {
        //<h1>
        //  Home!
        //</h1>
        }
        <Carousel />
        
        <ProductShowcase />
      </div>
    </>
  );
}

export default Home;
