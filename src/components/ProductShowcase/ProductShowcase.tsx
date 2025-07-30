import ProductCard from '../ProductCard/ProductCard';
import './ProductShowcase.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCardItem } from '../ProductCard/ProductCard';
import { useCarrinhoContext } from '../../context/CarrinhoContext';
// # import { useBuscaContext } from '../../context/BuscaContext';
import { CarrinhoItem } from '../../hooks/useCarrinho';

function toCarrinhoItem (item: ProductCardItem) : CarrinhoItem {
  return {...item, name: item.name, image: item.image?item.image:'', preco: item.price, url: item.url||'#', quantidade: 1};
}

function ProductShowcase () {
  const [produtos, setProdutos] = useState([] as ProductCardItem[]);
  
  // # const { busca } = useBuscaContext();
  const { addItem } = useCarrinhoContext();
  
  useEffect(() => {
    axios.get('http://localhost:3001/products', {}).then((req) => {
      setProdutos(req.data);
    });
    
    return (() => {
      setProdutos([]);
    });
  },[]);
  
  const gerenciaCliqueComprar = useCallback(
    (idProduto: string, event: React.MouseEvent) => {
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
    (idProduto: string) => {
      idProduto.substring(0);
      //console.log(`Produto clicado: ${idProduto}`);
    }, []
  );
  
  return (
    <div className="productshowcase">
      <h3 className="center">nossos queridinhos estão aqui</h3>
      
      <div className="productshowcase-lista-produtos-container">
        <div className="productshowcase-lista-produtos">
          {
            produtos.map((item) => {
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

