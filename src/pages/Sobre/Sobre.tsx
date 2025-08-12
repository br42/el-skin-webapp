// # import './Sobre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import rightImg from 'assets/images/image 12.png';
import leftImg from 'assets/images/image 7.png';
import wideImg from 'assets/images/image 13.png';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Pagina } from 'styles/GlobalStyle';

const SobreContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  height: fit-content;
  margin-bottom: 8px;
`;

const SobreContainerLeft = styled.div`
  width: 50%;
`;

const SobreContainerRight = styled.div`
  width: 50%;
`;

const SobreContainerBottom = styled.div`
  width: 100%;
`;

const ImagemPreencher = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

function Sobre() {
  return (
    <Pagina>
      <SobreContainer>
        <SobreContainerLeft>
          <h1>
            Sobre a AL SKIN
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
        
          <ImagemPreencher src={leftImg} />
        </SobreContainerLeft>
        
        <SobreContainerRight>
          <ImagemPreencher src={rightImg} />
          
          <p>
            VAMOS CONVERSAR?
            <br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
          
          <p>
            <Link to="/faleconosco">
              <button /*className="button-contact"*/>
                <FontAwesomeIcon icon={faComment} />
                <span>
                  Fale conosco
                </span>
              </button>
            </Link>
          </p>
        </SobreContainerRight>
      </SobreContainer>
      <SobreContainerBottom>
        <ImagemPreencher src={wideImg} />
      </SobreContainerBottom>
    </Pagina>
  );
}

export default Sobre;
