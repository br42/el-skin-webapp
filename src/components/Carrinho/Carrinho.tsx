// # import './Carrinho.css';
import { useCarrinhoContext } from 'context/CarrinhoContext';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const CarrinhoModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  backdrop-filter: blur(3px);
  z-index: 8001;
`;

const CarrinhoModalMain = styled.div`
  background: #333333;
  width: 90%;
  max-width: 640px;
  max-height: 90vh;
  height: fit-content;
  overflow: hidden;
  box-shadow: 0px 10px 30px #00000044;
  color: #FFFFFF;
  border-radius: 24px;

@media (max-width: 768px) {
  width: 95%;
  max-height: 95vh;
}
`;

const CarrinhoModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
  background: linear-gradient(140deg, #8866ff, #aa55ff);

@media (max-width: 768px) {
  padding: 15px;
}
`;

const CarrinhoModalHeaderTitulo = styled.h2`
  margin: 0px;
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;

@media (max-width: 768px) {
  font-size: 1.5rem;
}
`;

const CarrinhoModalHeaderBotaoFechar = styled.button`
  background: none;
  border: none;
  padding: 5px;
`;

const CarrinhoModalConteudo = styled.div`
  padding: 20px;
  max-height: 60vh;
  overflow-y: auto;

@media (max-width: 768px) {
  padding: 15px;
}
`;

const CarrinhoVazio = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #999999;
`;

const CarrinhoItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 16px;
`;

const CarrinhoItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #444444;
  border: 1px solid #555555;
  border-radius: 16px;
  position: relative;

@media (max-width: 768px) {
  flex-direction: column;
  gap: 10px;
}
`;

const CarrinhoItemImagem = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;

& img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  width: 60px;
  height: 60px;
}
`;

const CarrinhoItemDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

const CarrinhoItemNome = styled.h3`
  font-size: 1.0rem;
  font-weight: 600;
  margin: 0;
  color: #FFFFFF;
  line-height: 1.2;
`;

const CarrinhoItemControles = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

@media (max-width: 768px) {
  justify-content: space-between;
}
`;

const CarrinhoQuantidadeRotulo = styled.span`
  font-size: 0.9rem;
  color: #CCCCCC;
  margin-right: 10px;
`;

const CarrinhoQuantidadeControles = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

@media (max-width: 768px) {
  order: 1;
}
`;

const CarrinhoQuantidadeButton = styled.button`
  background: #555555;
  color: #FFFFFF;
  border-radius: 8px;
  cursor: pointer;
`;

const CarrinhoQuantidadeValor = styled.span`
  background: #444444;
  border: solid 1px #646464;
  color: white;
  padding: 5px 12px;
  border-radius: 8px;
  font-weight: 500;
  min-width: 40px;
  text-align: center;
`;

const CarrinhoRemoverButton = styled.button`
  background: #EE4444;
  color: #FFFFFF;
  margin-left: auto;
  border-radius: 8px;
  cursor: pointer;

@media (max-width: 768px) {
  order: 2;
  margin-left: 0;
}
`;

const CarrinhoItemPreco = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #aaee33;
`;

const CarrinhoTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #444444;
  margin-top: 20px;
`;

const CarrinhoTotalRotulo = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
`;

const CarrinhoTotalPreco = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #aaee33;
`;

const CarrinhoFinalizarButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #8855FF, #AA55FF);
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 10px;

&:hover {
  background: linear-gradient(135deg, #7733EE, #9933EE);
  transform: translateY(-1px);
  box-shadow: 0 5px 15px #8B5CF655;
}
`;

const CarrinhoModalVazio = styled.div`
  display: 'none';
`;

function formatarPreco (preco: number): string {
  return (`R$ ${preco.toFixed(2).replace('.',',')}`);
}

function Carrinho ({ isAberto, onClose, 'data-testid': dataTestid } : { isAberto: boolean, onClose: () => void, 'data-testid'?: string }) {
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
    return <CarrinhoModalVazio data-testid={dataTestid} tabIndex={-1} />;
  }
  
  return (
    <CarrinhoModalOverlay
      onClick={recebeuClique}
      onKeyDown={recebeuApertoTecla}
      data-testid={dataTestid}
      tabIndex={-1}
    >
      <CarrinhoModalMain>
        <CarrinhoModalHeader>
          <CarrinhoModalHeaderTitulo>Carrinho</CarrinhoModalHeaderTitulo>
          <CarrinhoModalHeaderBotaoFechar
            data-testid="carrinho-modal-fechar" onClick={onClose}
          >
            <FontAwesomeIcon icon={faClose} />
          </CarrinhoModalHeaderBotaoFechar>
        </CarrinhoModalHeader>
        <CarrinhoModalConteudo>
          {(itens.length === 0) ? (
            <CarrinhoVazio>
              <p>Carrinho vazio</p>
            </CarrinhoVazio>
          ) : (
            <>
              <CarrinhoItensContainer>
                {itens.map((item) => {
                  return (
                    <CarrinhoItem key={item.id}>
                      <CarrinhoItemImagem>
                        <img src={item.image} alt={item.name} />
                      </CarrinhoItemImagem>
                      
                      <CarrinhoItemDetalhes>
                        <CarrinhoItemNome>{item.name}</CarrinhoItemNome>
                        
                        <CarrinhoItemControles>
                          <CarrinhoQuantidadeRotulo>Quantidade</CarrinhoQuantidadeRotulo>
                          <CarrinhoQuantidadeControles>
                            <CarrinhoQuantidadeButton title="-"
                              data-testid="carrinho-quantidade-button-plus" 
                              onClick={
                                ()=>setQuantidade(item.id, (item.quantidade < 2) ? 1 : item.quantidade-1)
                              }
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </CarrinhoQuantidadeButton>
                            <CarrinhoQuantidadeValor>{item.quantidade}</CarrinhoQuantidadeValor>
                            <CarrinhoQuantidadeButton title="+"
                              data-testid="carrinho-quantidade-button-minus" 
                              onClick={
                                ()=>setQuantidade(item.id, item.quantidade+1)
                              }
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </CarrinhoQuantidadeButton>
                          </CarrinhoQuantidadeControles>
                          
                          <CarrinhoRemoverButton 
                            title="Remover item"
                            data-testid="carrinho-remover-button" 
                            onClick={() => removeItem(item.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </CarrinhoRemoverButton>
                        </CarrinhoItemControles>
                        
                        <CarrinhoItemPreco>
                          {formatarPreco(item.preco * item.quantidade)}
                        </CarrinhoItemPreco>
                      </CarrinhoItemDetalhes>
                    </CarrinhoItem>
                  );
                })}
              </CarrinhoItensContainer>
              
              <CarrinhoTotal>
                <CarrinhoTotalRotulo>Total</CarrinhoTotalRotulo>
                <span> </span>
                <CarrinhoTotalPreco>{formatarPreco(getPrecoTotal())}</CarrinhoTotalPreco>
              </CarrinhoTotal>
              
              <CarrinhoFinalizarButton>
                Finalizar compra
              </CarrinhoFinalizarButton>
            </>
          )}
        </CarrinhoModalConteudo>
      </CarrinhoModalMain>
    </CarrinhoModalOverlay>
  );
}

export default Carrinho;
