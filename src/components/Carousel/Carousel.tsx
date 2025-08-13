import './Carousel.css';
import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CarouselImagem, carouselService,  } from 'service/carouselService';
import { Link } from 'react-router-dom';

function Carousel () {
  const [carouselImage, setCarouselImage] = useState(0);
  const [imagens, setImagens] = useState([] as CarouselImagem[]);
  
  useEffect(() => {
    async function obterImagens () {
      const novasImagens = await carouselService.getCarouselItems();
      setImagens(novasImagens);
    }
    
    obterImagens();
  },[]);
  
  const nextItem = useCallback(function () {
    setCarouselImage((item) => ((item + 1) % (imagens.length ? imagens.length : 1)));
  }, [imagens]);
  
  const previousItem = useCallback(function () {
    setCarouselImage((item) => ((imagens.length + item - 1) % (imagens.length ? imagens.length : 1)));
  }, [imagens]);
  
  useEffect((() => {
    const timer = setInterval(() => {
      nextItem();
    }, 5000);
    
    return (() => {
      clearInterval(timer);
    });
  }), [nextItem]);
  
  return (
    <div className="carousel">
      <button className="carousel-button carousel-button-left" data-testid="carousel-button-left" onClick={previousItem}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </button>
      <button className="carousel-button carousel-button-right" data-testid="carousel-button-right" onClick={nextItem}>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
      <picture className="carrousel-image" style={{backgroundImage: `url('${imagens[carouselImage]?.backgroundImage}')`}} title={`${imagens[carouselImage]?.title}`} >
        <div className="carrousel-image-banner-container">
          <div className="carrousel-image-banner-text">
            <div className="carrousel-image-banner-top">
              {imagens[carouselImage]?.subtitle || null}
            </div>
            <div className="carrousel-image-banner-title">
              {imagens[carouselImage]?.title || null}
            </div>
            {
              imagens[carouselImage]?.desconto &&
              <div className="carrousel-image-banner-desconto">
                {imagens[carouselImage]?.desconto || null}
              </div>
            }
            <div className="carrousel-image-banner-bottom">
              {imagens[carouselImage]?.description || null}
            </div>
            {
              imagens[carouselImage]?.cupom && 
              <div className="carrousel-image-banner-cupom">
                {imagens[carouselImage]?.cupom || null}
              </div>
            }
          </div>
          <Link to={imagens[carouselImage]?.url || '#'}>
            <button className="carrousel-image-banner-botao-comprar" >
              <span>
                {'comprar agora'}
              </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </picture>
    </div>
  );
}

export default Carousel;

