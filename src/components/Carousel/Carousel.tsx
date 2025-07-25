import "./Carousel.css";
//import "../../assets/images";
import { useState, useEffect, ReactNode, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export interface CarouselImagem {
  id: number,
  subtitle: string | ReactNode,
  title: string | ReactNode,
  description: string | ReactNode,
  desconto: string | ReactNode | null | undefined,
  cupom: string | ReactNode | null | undefined,
  backgroundImage: string | ReactNode,
  url: string | null | undefined
};

function Carousel () {
  const [carouselImage, setCarouselImage] = useState(0);
  const [imagens, setImagens] = useState([] as CarouselImagem[]);
  
  useEffect(() => {
    axios.get("http://localhost:3001/carousel", {}).then((req) => {
      setImagens(req.data);
    });
    
    return (() => {
      setImagens([]);
    });
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
      <button className="carousel-button carousel-button-left" onClick={previousItem}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </button>
      <button className="carousel-button carousel-button-right" onClick={nextItem}>
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
          <a href={imagens[carouselImage]?.url || "#"}>
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

