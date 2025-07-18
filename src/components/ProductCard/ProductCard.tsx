import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductCard.css";
import { useState, useEffect, ReactNode } from "react";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ProductCard ({ product, idkey } : { 
  product:{
    key: number, title: string, src: string, description: string|ReactNode, price: string,
    tags: {
      name:string, fgcolor:string, bgcolor:string
    }[]
  }, idkey:number 
}) {
  //const [carouselImage, setCarouselImage] = useState(0);
  useState(null);
  
  useEffect((() => {
    
    
    return (() => {
      
    });
  }), []);
  
  return ( product &&
    <div className="productcard" key={idkey}>
      {
        <picture className="productcard-picture" title={`${product.title}`} style={{backgroundImage: `url('${product.src}')`}}>
        </picture>
      }
      <div className="productcard-content">
        <div>
          <div>
            <strong>{product.title}</strong>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
        </div>
        <div>
          <div className="productcard-tags-container">
            {
              product.tags && product.tags.map((tag: {name:string, fgcolor:string, bgcolor:string}, index: number) => {
                return (
                  <span className="productcard-tag-label" key={index} style={{color: tag.fgcolor, backgroundColor: tag.bgcolor}}>
                    {tag.name}
                  </span>
                ); 
              })
            }
          </div>
          <div>
            <span>
              <strong>{product.price}</strong>
            </span>
            <button className="productcard-button-comprar">
              <span><strong>comprar</strong></span>
              
              <FontAwesomeIcon icon={faShoppingBag} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

