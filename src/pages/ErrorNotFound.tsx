import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ErrorNotFound.css';
import { useNavigate, useParams } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ErrorNotFound() {
  const urlpath = useParams()['*'];
  const navigate = useNavigate();
  
  return (
    <div className="pagina">
      <h1 className="center">
        404 Not Found
      </h1>
      <p className="center">
        Não foi possível encontrar a página requisitada na URL &quot;/{urlpath}&quot;.
      </p>
      <div className="center">
        <button onClick={()=>navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Voltar</span>
        </button>
      </div>
    </div>
  );
}

export default ErrorNotFound;
