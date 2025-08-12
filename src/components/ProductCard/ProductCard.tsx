// # import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { ProductCardItem, ProductCardTag } from 'service/productService';
import { styled } from 'styled-components';

const ProductCardMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  border: solid 1px #c0c0c0;
  border-radius: 16px;
  padding: 8px 8px;
  width: 192px;
  max-height: 480px;
  height: fit-content;
`;

const ProductCardPicture = styled.picture`
  display: block;
  background-image: none;
  background-size: cover;
  background-position: center;
  width: 192px;
  height: 192px;
  border-radius: 8px;
`;

const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  align-content: left;
  justify-content: space-between;
  width: 100%;
  height: 220px;
  margin: 0px 0px;

& * {
  margin: 0px 0px;
}
`;

const ProductCardTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

const ProductCardTagLabel = styled.span`
  padding: 0px 1em;
  border-radius: 8px;
  background-color: #757575;
  color: #FFFFFF;
  font-weight: 700;
`;

const ProductCardBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 2px;
  justify-content: space-between;
  height: fit-content;
`;

const ProductCardButtonComprar = styled.button`
  padding: 4px 4px;
  margin: 0px 0px;

& * {
  padding: 0px 0px;
  margin: 0px 2px 0px 2px;
}
`;

function formatarPreco (preco: number): string {
  return (`R$ ${preco.toFixed(2).replace('.',',')}`);
}

function ProductCard ({ product, id, onCliqueProduto, onCliqueComprar } : { 
  product: ProductCardItem,
  id: string|number,
  onCliqueProduto: (idProduto: string|number) => void,
  onCliqueComprar: (idProduto: string|number, event: React.MouseEvent) => void
}) {
  
  return ( product &&
    <ProductCardMain data-testid="productcard" key={id} onClick={() => onCliqueProduto(id)}>
      {
        <ProductCardPicture title={`${product?.name}`} style={{backgroundImage: `url('${product?.image}')`}}>
        </ProductCardPicture>
      }
      <ProductCardContent>
        <div>
          <div>
            <strong>{product.name}</strong>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
        </div>
        <div>
          <ProductCardTagsContainer>
            {
              product.tags && product.tags.map((tag: ProductCardTag, index: number) => {
                return (
                  <ProductCardTagLabel key={index}
                    style={{backgroundColor: tag.bgcolor || '#808080', color: tag.fgcolor || '#FFFFFF'}}>
                    {tag.name}
                  </ProductCardTagLabel>
                ); 
              })
            }
          </ProductCardTagsContainer>
          <ProductCardBottom>
            <span>
              <strong>{(product?.price && typeof(product?.price)==='number') && formatarPreco(product?.price)}</strong>
            </span>
            <ProductCardButtonComprar
              data-testid="productcard-button-comprar"
              onClick={(e) => onCliqueComprar(product.id, e)}
            >
              <span><strong>comprar</strong></span>
              
              <FontAwesomeIcon icon={faShoppingBag} />
            </ProductCardButtonComprar>
          </ProductCardBottom>
        </div>
      </ProductCardContent>
    </ProductCardMain>
  );
}

export default ProductCard;

