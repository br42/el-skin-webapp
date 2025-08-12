import './FaleConosco.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import rightImg from 'assets/images/image 14.png';

function FaleConosco() {
  return (
    <div className="pagina">
      <div className="faleconosco-container">
        <div className="faleconosco-container-left">
          
          <h1>
            Fale Conosco
          </h1>
          
          <form id="faleconosco">
            <div>
              <input type="text" id="contato-nome" className="input-text" placeholder="Seu nome" />
            </div>
            <div>
              <input type="text" id="contato-email" className="input-text" placeholder="Seu e-mail para contato" />
            </div>
            <div>
              <input type="text" id="contato-telefone" className="input-text" placeholder="Seu telefone com DDD" />
            </div>
            <div>
              <input type="text" id="contato-cpf" className="input-text" placeholder="Seu CPF" />
            </div>
            
            <section className="contato-categoria">
              {
              //<fieldset className="contato-categoria">
                <>
                  <legend>Categoria:</legend>
                
                  <div>
                    <input type="checkbox" id="contato-categoria-duvidas" /><>
                      <label htmlFor="contato-categoria-duvidas">Dúvidas</label>
                    </>
                    <input type="checkbox" id="contato-categoria-problemapedido" /><>
                      <label htmlFor="contato-categoria-problemapedido">Problema com pedido</label>
                    </>
                    <input type="checkbox" id="contato-categoria-reclamacao" /><>
                      <label htmlFor="contato-categoria-reclamacao">Reclamação</label>
                    </>
                  </div>
                  <div>
                    <input type="checkbox" id="contato-categoria-sugestao" /><>
                      <label htmlFor="contato-categoria-sugestao">Sugestão</label>
                    </>
                    <input type="checkbox" id="contato-categoria-elogios" /><>
                      <label htmlFor="contato-categoria-elogios">Elogios</label>
                    </>
                    <input type="checkbox" id="contato-categoria-outro" /><>
                      <label htmlFor="contato-categoria-outro">Outro</label>
                    </>
                  </div>
                </>
              //</fieldset>
              }
            </section>
            
            <div>
              <textarea id="contato-mensagem" className="input-textarea" placeholder="Sua mensagem..." />
            </div>
            
            <p></p>
            
            <div>
              <button type="submit" className="button-send">
                <span>
                  Enviar mensagem
                </span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </form>
          
          <p></p>
        </div>
        <div className="faleconosco-container-right">
          <img alt="" className="faleconosco-imagem-preencher" src={rightImg} />
        </div>
      </div>
      
      <div className="faleconosco-container-bottom">
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
      </div>
    </div>
  );
}

export default FaleConosco;
