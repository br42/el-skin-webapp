import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';

export type ProductCardTag = {
  name: string,
  fgcolor: string | null | undefined,
  bgcolor: string | null | undefined
}

export type ProductCardItem = {
  id: string,
  name: string,
  description: string | ReactNode | null | undefined,
  desconto: string | ReactNode | null | undefined,
  price: number,
  tags: ProductCardTag[],
  image: string,
  url: string | null | undefined
};

function formatarPreco (preco: number): string {
  return (`R$ ${preco.toFixed(2).replace('.',',')}`);
}

function ProductCard ({ product, id, onCliqueProduto, onCliqueComprar } : { 
  product: ProductCardItem,
  id: string,
  onCliqueProduto: (idProduto: string) => void,
  onCliqueComprar: (idProduto: string, event: React.MouseEvent) => void
}) {
  
  return ( product &&
    <div className="productcard" key={id} onClick={() => onCliqueProduto}>
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
                  <span className="productcard-tag-label" key={index} style={{backgroundColor: tag.bgcolor || '#808080', color: tag.fgcolor || '#FFFFFF'}}>
                    {tag.name}
                  </span>
                ); 
              })
            }
          </div>
          <div className="productcard-bottom">
            <span>
              <strong>{(product?.price && typeof(product?.price)==='number') && formatarPreco(product?.price)}</strong>
            </span>
            <button className="productcard-button-comprar"
              onClick={(e) => onCliqueComprar(product.id, e)}
            >
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

