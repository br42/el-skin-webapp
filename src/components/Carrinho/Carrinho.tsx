import './Carrinho.css';
import { useCarrinhoContext } from '../../context/CarrinhoContext';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

function formatarPreco (preco: number): string {
  return (`R$ ${preco.toFixed(2).replace('.',',')}`);
}

function Carrinho ({ isAberto, onClose } : { isAberto: boolean, onClose: () => void }) {
  const carrinho = useCarrinhoContext();
  const { itens, getPrecoTotal, setQuantidade, removeItem } = carrinho;
  
  const recebeuClique = useCallback((e: React.MouseEvent)=>{
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);
  
  const recebeuApertoTecla = useCallback((e: React.KeyboardEvent)=>{
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);
  
  if (!isAberto) {
    return null;
  }
  
  return <div className="carrinho-modal" onClick={recebeuClique} onKeyDown={recebeuApertoTecla}>
    <div className="carrinho-modal-header">
      <h2 className="carrinho-modal-header-titulo">Carrinho</h2>
      <button className="carrinho-modal-header-botao-fechar" onClick={onClose}>
        <FontAwesomeIcon icon={faClose} />
      </button>
    </div>
    <div className="carrinho-modal-conteudo">
      {(itens.length === 0) ? (
        <div className="carrinho-vazio">
          <p>Carrinho vazio</p>
        </div>
      ) : (
        <>
          <div className="carrinho-itens-container">
            {itens.map((item) => {
              return (
                <div className="carrinho-item" key={item.id}>
                  <div>
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="carrinho-item-detalhes">
                    <h3 className="carrinho-item-nome">{item.name}</h3>
                    
                    <div>
                      <span>Quantidade</span>
                      <div>
                        <button title="-" onClick={
                          ()=>setQuantidade(item.id, (item.quantidade < 2) ? 1 : item.quantidade-1)
                        }>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span> </span>
                        <span>{item.quantidade}</span>
                        <span> </span>
                        <button title="+" onClick={
                          ()=>setQuantidade(item.id, item.quantidade+1)
                        }>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      
                      <button title="Remover item" onClick={() => removeItem(item.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                    
                    <div>
                      {formatarPreco(item.preco * item.quantidade)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="carrinho-total">
            <span>Total</span>
            <span> </span>
            <span>{formatarPreco(getPrecoTotal())}</span>
          </div>
        </>
      )}
    </div>
  </div>;
}

export default Carrinho;
