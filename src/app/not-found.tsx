'use client';
import './ErrorNotFound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter, usePathname } from 'next/navigation';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ErrorNotFound() {
  const urlpath = usePathname()?.substring(1);
  const router = useRouter();
  
  return (
    <div className="pagina">
      <h1 className="center">
        404 Not Found
      </h1>
      <p className="center">
        Não foi possível encontrar a página requisitada na URL &quot;/{urlpath}&quot;.
      </p>
      <div className="center">
        <button data-testid="notfound-botao-voltar" onClick={()=>router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Voltar</span>
        </button>
      </div>
    </div>
  );
}

export default ErrorNotFound;
