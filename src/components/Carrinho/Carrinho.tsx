import './Carrinho.css';
import { useCarrinhoContext } from '../../context/CarrinhoContext';

function Carrinho ({ isAberto, onClose } : { isAberto: boolean, onClose: ( event?: Event ) => void }) {
  const carrinho = useCarrinhoContext();
  
  if (!isAberto) {
    return null;
  }
  
  return <div className="carrinho-modal">
    {carrinho.itens.map((item, index) => {
      return (<div className="carrinho-item" key={index}>
        {item.id || `${onClose}`}
      </div>);
    })}
  </div>;
}

export default Carrinho;
