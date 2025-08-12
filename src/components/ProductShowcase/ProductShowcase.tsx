// # import './ProductShowcase.css';
import ProductCard from 'components/ProductCard/ProductCard';
import { useCallback, useEffect, useState } from 'react';
import { ProductCardItem } from 'service/productService';
import { useCarrinhoContext } from 'context/CarrinhoContext';
import { useBuscaContext } from 'context/BuscaContext';
import { CarrinhoItem } from 'hooks/useCarrinho';
import { productService } from 'service/productService';
import { styled } from 'styled-components';

const ProductShowcaseMain = styled.div`
  display: block;
  width: 100%;
  max-width: 100dvw;
  justify-items: center;
`;

const ProductShowcaseListaProdutosContainer = styled.div`
  align-items: center;
  justify-items: center;
`;

const ProductShowcaseListaProdutos = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: minmax(128px, auto);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  justify-self: center;
  row-gap: 32px;
  column-gap: 16px;
  align-items: center;
  justify-items: center;
`;

const ProductShowcaseTitulo = styled.h3`
  text-align: center;
  align-items: center;
  justify-items: center;
`;

function toCarrinhoItem (item: ProductCardItem) : CarrinhoItem {
  return {...item, name: item.name, image: item.image?item.image:'', preco: item.price, url: item.url||'#', quantidade: 1};
}

function ProductShowcase ( { debugProdutos = undefined } : { debugProdutos?: ProductCardItem[] } = { debugProdutos: undefined } ) {
  const [produtos, setProdutos] = useState([] as ProductCardItem[]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([] as ProductCardItem[]);
  const { busca } = useBuscaContext();
  const { addItem } = useCarrinhoContext();
  
  useEffect(() => {
    const obterProdutos = async () => {
      try {
        const produtos = await productService.getProducts();
        setProdutos(produtos);
      } catch {
        ;
      } finally {
        if (debugProdutos !== undefined) {
          setProdutos(debugProdutos);
        }
      }
    };
    
    obterProdutos();
  },[debugProdutos]);
  
  useEffect(() => {
    if (busca) {
      setProdutosFiltrados(produtos.filter(produto =>
        produto.name.toLowerCase().includes(busca.toLowerCase()) ||
        produto.description?.toLowerCase().includes(busca.toLowerCase())
      ));
    } else {
      setProdutosFiltrados([...produtos]);
    }
  }, [busca, produtos]);
  
  const gerenciaCliqueComprar = useCallback(
    (idProduto: string|number, event: React.MouseEvent) => {
      event.stopPropagation();
      console.log(`Comprar produto: ${idProduto}`);
      
      const produtoComprado = produtos.find(produto => produto.id === idProduto);
      
      if (!produtoComprado) {
        console.error(`Comprar produto: Produto com ID ${idProduto} não encontrado.`);
        return;
      }
      
      addItem(toCarrinhoItem(produtoComprado));
    }, [produtos, addItem]
  );
  
  const gerenciaCliqueProduto = useCallback(
    (idProduto: string|number) => {
      String(idProduto).substring(0);
      //console.log(`Produto clicado: ${idProduto}`);
    }, []
  );
  
  return (
    <ProductShowcaseMain>
      <ProductShowcaseTitulo>nossos queridinhos estão aqui</ProductShowcaseTitulo>
      
      <ProductShowcaseListaProdutosContainer>
        <ProductShowcaseListaProdutos>
          {
            produtosFiltrados.map((item) => {
              return <ProductCard key={item.id} id={item.id}
                product={item}
                onCliqueComprar={gerenciaCliqueComprar}
                onCliqueProduto={gerenciaCliqueProduto}
              />;
            })
          }
        </ProductShowcaseListaProdutos>
      </ProductShowcaseListaProdutosContainer>
    </ProductShowcaseMain>
  );
}

export default ProductShowcase;

