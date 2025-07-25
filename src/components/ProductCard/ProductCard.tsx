import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

export interface ProductCardTag {
  name: string,
  fgcolor: string | null | undefined,
  bgcolor: string | null | undefined
}

export interface ProductCardItem {
  id: number,
  name: string | ReactNode,
  description: string | ReactNode | null | undefined,
  desconto: string | ReactNode | null | undefined,
  price: number,
  tags: ProductCardTag[],
  image: string | ReactNode,
  url: string | null | undefined
};

function ProductCard ({ product, id } : { 
  product: ProductCardItem, id: number 
}) {
  
  return ( product &&
    <div className="productcard" key={id}>
      {
        <picture className="productcard-picture" title={`${product?.name}`} style={{backgroundImage: `url('${product?.image}')`}}>
        </picture>
      }
      <div className="productcard-content">
        <div>
          <div>
            <strong>{product.name}</strong>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
        </div>
        <div>
          <div className="productcard-tags-container">
            {
              product.tags && product.tags.map((tag: ProductCardTag, index: number) => {
                return (
                  <span className="productcard-tag-label" key={index} style={{backgroundColor: tag.bgcolor || "#808080", color: tag.fgcolor || "#FFFFFF"}}>
                    {tag.name}
                  </span>
                ); 
              })
            }
          </div>
          <div className="productcard-bottom">
            <span>
              <strong>{`R$ ${product?.price?.toPrecision(4)}`}</strong>
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

