import './Carrinho.css';
import { useCarrinhoContext } from 'context/CarrinhoContext';
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
  
  return (
    <div className="carrinho-modal-overlay"
      onClick={recebeuClique}
      onKeyDown={recebeuApertoTecla}
      tabIndex={-1}
    >
      <div className="carrinho-modal">
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
                      <div className="carrinho-item-imagem">
                        <img src={item.image} alt={item.name} />
                      </div>
                      
                      <div className="carrinho-item-detalhes">
                        <h3 className="carrinho-item-nome">{item.name}</h3>
                        
                        <div className="carrinho-item-controles">
                          <span className="carrinho-quantidade-rotulo">Quantidade</span>
                          <div className="carrinho-quantidade-controles">
                            <button title="-"
                              className="carrinho-quantidade-button" 
                              onClick={
                                ()=>setQuantidade(item.id, (item.quantidade < 2) ? 1 : item.quantidade-1)
                              }
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span className="carrinho-quantidade-valor">{item.quantidade}</span>
                            <button title="+"
                              className="carrinho-quantidade-button" 
                              onClick={
                                ()=>setQuantidade(item.id, item.quantidade+1)
                              }
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                          
                          <button title="Remover item"
                            className="carrinho-remover-button"
                            onClick={() => removeItem(item.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                        
                        <div className="carrinho-item-preco">
                          {formatarPreco(item.preco * item.quantidade)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="carrinho-total">
                <span className="carrinho-total-rotulo">Total</span>
                <span> </span>
                <span className="carrinho-total-preco">{formatarPreco(getPrecoTotal())}</span>
              </div>
              
              <button className="carrinho-finalizar-button">
                Finalizar compra
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carrinho;
