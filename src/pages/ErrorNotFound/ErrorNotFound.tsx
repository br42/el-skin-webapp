// # import './ErrorNotFound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Pagina } from 'styles/GlobalStyle';
import { styled } from 'styled-components';

const CenteredDiv = styled.div`
  text-align: center;
  justify-items: center;
  align-items: center;
`;

const CenteredH1 = styled.h1`
  text-align: center;
  justify-items: center;
  align-items: center;
`;

const CenteredP = styled.p`
  text-align: center;
  justify-items: center;
  align-items: center;
`;

function ErrorNotFound() {
  const urlpath = useParams()['*'];
  const navigate = useNavigate();
  
  return (
    <Pagina>
      <CenteredH1>
        404 Not Found
      </CenteredH1>
      <CenteredP>
        Não foi possível encontrar a página requisitada na URL &quot;/{urlpath}&quot;.
      </CenteredP>
      <CenteredDiv>
        <button data-testid="notfound-botao-voltar" onClick={()=>navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Voltar</span>
        </button>
      </CenteredDiv>
    </Pagina>
  );
}

export default ErrorNotFound;
