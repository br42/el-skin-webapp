// # import './FaleConosco.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import rightImg from 'assets/images/image 14.png';
import { Pagina } from 'styles/GlobalStyle';
import { styled } from 'styled-components';

const FaleConoscoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  height: fit-content;
  margin-bottom: 8px;
`;

const FaleConoscoImagemPreencher = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const FaleConoscoContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

& form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 50%;
}
`;

const FaleConoscoContainerRight = styled.div`
  width: 50%;
`;

const FaleConoscoContainerBottom = styled.div`
  width: 100%;
`;

const LabelContainer = styled.span`
  display: inline;
  margin: 0px 4px;
`;

function FaleConosco() {
  return (
    <Pagina>
      <FaleConoscoContainer>
        <FaleConoscoContainerLeft>
          
          <h1>
            Fale Conosco
          </h1>
          
          <form id="faleconosco">
            <div>
              <input type="text" id="contato-nome" placeholder="Seu nome" />
            </div>
            <div>
              <input type="text" id="contato-email" placeholder="Seu e-mail para contato" />
            </div>
            <div>
              <input type="text" id="contato-telefone" placeholder="Seu telefone com DDD" />
            </div>
            <div>
              <input type="text" id="contato-cpf" placeholder="Seu CPF" />
            </div>
            
            <section className="contato-categoria">
              {
              //<fieldset className="contato-categoria">
                <>
                  <legend>Categoria:</legend>
                
                  <div>
                    <input type="checkbox" id="contato-categoria-duvidas" /><LabelContainer>
                      <label htmlFor="contato-categoria-duvidas">Dúvidas</label>
                    </LabelContainer>
                    <input type="checkbox" id="contato-categoria-problemapedido" /><LabelContainer>
                      <label htmlFor="contato-categoria-problemapedido">Problema com pedido</label>
                    </LabelContainer>
                    <input type="checkbox" id="contato-categoria-reclamacao" /><LabelContainer>
                      <label htmlFor="contato-categoria-reclamacao">Reclamação</label>
                    </LabelContainer>
                  </div>
                  <div>
                    <input type="checkbox" id="contato-categoria-sugestao" /><LabelContainer>
                      <label htmlFor="contato-categoria-sugestao">Sugestão</label>
                    </LabelContainer>
                    <input type="checkbox" id="contato-categoria-elogios" /><LabelContainer>
                      <label htmlFor="contato-categoria-elogios">Elogios</label>
                      <span> </span>
                    </LabelContainer>
                    <input type="checkbox" id="contato-categoria-outro" /><LabelContainer>
                      <span> </span>
                      <label htmlFor="contato-categoria-outro">Outro</label>
                      <span> </span>
                    </LabelContainer>
                  </div>
                </>
              //</fieldset>
              }
            </section>
            
            <div>
              <textarea id="contato-mensagem" placeholder="Sua mensagem..." />
            </div>
            
            <p></p>
            
            <div>
              <button type="submit">
                <span>
                  Enviar mensagem
                </span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </form>
          
          <p></p>
        </FaleConoscoContainerLeft>
        <FaleConoscoContainerRight>
          <FaleConoscoImagemPreencher alt="" src={rightImg} />
        </FaleConoscoContainerRight>
      </FaleConoscoContainer>
      
      <FaleConoscoContainerBottom>
        <h1>
          Ajuda - FAQ
        </h1>
        
        <p>
          QUEM SOMOS
          <br/>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p>
          POR QUE EXISTIMOS?
          <br/>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          O QUE A GENTE FAZ?
          <br/>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        
        <p>
          QUEM SOMOS
          <br/>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p>
          POR QUE EXISTIMOS?
          <br/>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          O QUE A GENTE FAZ?
          <br/>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </FaleConoscoContainerBottom>
    </Pagina>
  );
}

export default FaleConosco;
