'use client';

import Carousel from '@/components/Carousel/Carousel';
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase';
import styles from './page.module.css';

function Home() {
  return (
    <>
      <div data-testid="banner-compra" className={styles['banner-compra']}>
        <strong className={styles['banner-mensagem-primeira-compra']}>primeira compra?</strong>
        <span className={styles['banner-mensagem-desconto']}><strong>R$25 OFF</strong> A PARTIR DE <strong>R$ 200</strong></span>
        <button className={styles['banner-botao-compra']}><strong>PRIMEIRA25</strong></button>
      </div>
      <div className={styles['pagina']}>
        <Carousel />
        <ProductShowcase />
      </div>
    </>
  );
}

export default Home;
