import "./Carousel.css";
import { useState, useEffect } from "react";
import promo1 from '../../assets/images/image 4.png';
import promo2 from '../../assets/images/image 2.png';
import promo3 from '../../assets/images/image 1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const imagens = [
  {
    key: 1,
    src: promo1,
    title: "corporal",
    banner: {
      top: "confira nossa linha",
      title: "corporal",
      buttom: "com benefícios além da hidratação",
      desconto: null,
      cupom: null,
      url: "#"
    }
  },
  {
    key: 2,
    src: promo2,
    title: "kits incríveis",
    banner: {
      top: "confira nossa linha",
      title: "kits incríveis",
      desconto: "até 50% OFF",
      buttom: "use o cupom",
      cupom: "QUEROTODOS",
      url: "#"
    }
  },
  {
    key: 3,
    src: promo3,
    title: "linha anti-age",
    banner: {
      top: "toda linha",
      title: "anti-age",
      desconto: "com 15% OFF",
      buttom: "use o cupom",
      cupom: "ANTIAGE15",
      url: "#"
    }
  },
];

function Carousel () {
  const [carouselImage, setCarouselImage] = useState(0);
  
  function nextItem () {
    setCarouselImage((item) => ((item + 1) % (imagens.length)));
  }
  
  function previousItem () {
    setCarouselImage((item) => ((imagens.length + item - 1) % (imagens.length)));
  }
  
  useEffect((() => {
    const timer = setInterval(() => {
      nextItem();
    }, 5000);
    
    return (() => {
      clearInterval(timer);
    });
  }), []);
  
  return (
    <div className="carousel">
      <button className="carousel-button carousel-button-left" onClick={previousItem}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </button>
      <button className="carousel-button carousel-button-right" onClick={nextItem}>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
      <picture className="carrousel-image" style={{backgroundImage: `url('${imagens[carouselImage].src}')`}} title={`${imagens[carouselImage].title}`} >
        <div className="carrousel-image-banner-container">
          <div className="carrousel-image-banner-text">
            <div className="carrousel-image-banner-top">
              {imagens[carouselImage]?.banner?.top || null}
            </div>
            <div className="carrousel-image-banner-title">
              {imagens[carouselImage]?.banner?.title || null}
            </div>
            {
              imagens[carouselImage]?.banner?.desconto &&
              <div className="carrousel-image-banner-desconto">
                {imagens[carouselImage]?.banner?.desconto || null}
              </div>
            }
            <div className="carrousel-image-banner-bottom">
              {imagens[carouselImage]?.banner?.buttom || null}
            </div>
            {
              imagens[carouselImage]?.banner?.cupom && 
              <div className="carrousel-image-banner-cupom">
                {imagens[carouselImage]?.banner?.cupom || null}
              </div>
            }
          </div>
          <a href={imagens[carouselImage]?.banner?.url || "#"}>
            <button className="carrousel-image-banner-botao-comprar" >
              <span>
                {"comprar agora"}
              </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </a>
        </div>
      </picture>
    </div>
  );
}

export default Carousel;

