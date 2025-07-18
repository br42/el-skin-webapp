import "./Carousel.css";
import { useState, useEffect } from "react";
import promo1 from '../../assets/images/Group 6.png';
import promo2 from '../../assets/images/Group 7.png';
import promo3 from '../../assets/images/Group 8.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

//import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
//import IconeBolsa from "../../assets/bolsa.svg";
//import IconeLupa from "../../assets/lupa.svg";
//import Logo from "../../assets/logo.svg";

const imagens = [
  {
    key: 1,
    src: promo1,
    title: "corporal",
  },
  {
    key: 2,
    src: promo2,
    title: "kits incríveis",
  },
  {
    key: 3,
    src: promo3,
    title: "linha anti-age",
  },
];

function Carousel () {
  const [carouselImage, setCarouselImage] = useState(0);
  //useState(null);
  
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
      <picture className="carrousel-image" style={{backgroundImage: `url('${imagens[carouselImage].src}')`}} title={`${imagens[carouselImage].title}`}>
      </picture>
      {
      //<img className="carrousel-image" src={promo2} alt="kits incríveis">
      //</img>
      //<img className="carrousel-image" src={promo3} alt="anti-age">
      //</img>
      }
    </div>
  );
}

export default Carousel;

