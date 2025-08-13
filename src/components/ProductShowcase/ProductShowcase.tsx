import './ProductShowcase.css';
import ProductCard from 'components/ProductCard/ProductCard';
import { useCallback, useEffect, useState } from 'react';
import { ProductCardItem } from 'service/productService';
import { useCarrinho } from 'hooks/useCarrinho';
import { useSearch } from 'hooks/useSearch';
import { CarrinhoItem } from 'store/slices/cartSlice';
import { productService } from 'service/productService';

function toCarrinhoItem (item: ProductCardItem) : CarrinhoItem {
  return {...item, name: item.name, image: item.image?item.image:'', preco: item.price, url: item.url||'#', quantidade: 1};
}

function ProductShowcase ( { debugProdutos = undefined } : { debugProdutos?: ProductCardItem[] } = { debugProdutos: undefined } ) {
  const [produtos, setProdutos] = useState([] as ProductCardItem[]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([] as ProductCardItem[]);
  const { busca } = useSearch();
  const { addItem } = useCarrinho();
  
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
    <div className="productshowcase">
      <h3 className="center">nossos queridinhos estão aqui</h3>
      
      <div className="productshowcase-lista-produtos-container">
        <div className="productshowcase-lista-produtos">
          {
            produtosFiltrados.map((item) => {
              return <ProductCard key={item.id} id={item.id}
                product={item}
                onCliqueComprar={gerenciaCliqueComprar}
                onCliqueProduto={gerenciaCliqueProduto}
              />;
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;

