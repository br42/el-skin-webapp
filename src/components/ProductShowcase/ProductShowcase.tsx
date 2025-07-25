import ProductCard from '../ProductCard/ProductCard';
import "./ProductShowcase.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductCardItem } from "../ProductCard/ProductCard";

function ProductShowcase () {
  const [produtos, setProdutos] = useState([] as ProductCardItem[]);
  
  useEffect(() => {
      axios.get("http://localhost:3001/products", {}).then((req) => {
        setProdutos(req.data);
      });
      
      return (() => {
        setProdutos([]);
      });
    },[]);
  
  return (
    <div className="productshowcase">
      <h3 className="center">nossos queridinhos estão aqui</h3>
      
      <div className="productshowcase-lista-produtos-container">
        <div className="productshowcase-lista-produtos">
        {
          produtos.map((item, index) => {
            return <ProductCard key={item?.id} id={index} product={item} />
          })
        }
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;

