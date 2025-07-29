import './ErrorNotFound.css';
import { useParams } from 'react-router';

function ErrorNotFound() {
  const urlpath = useParams()['*'];
  
  return (
    <div className="pagina">
      <h1 className="center">
        404 Not Found
      </h1>
      <p className="center">
        Não foi possível encontrar a página requisitada na URL &quot;/{urlpath}&quot;.
      </p>
    </div>
  );
}

export default ErrorNotFound;
