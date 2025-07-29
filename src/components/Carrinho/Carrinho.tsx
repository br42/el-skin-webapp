import './Carrinho.css';
import { useCarrinhoContext } from '../../context/CarrinhoContext';

function Carrinho () {
  const carrinhoItens = useCarrinhoContext();
  
  return <>
    {carrinhoItens}
  </>;
}

export default Carrinho;
