import React from 'react';
import './ErrorNotFound.css';
import { useParams } from 'react-router';

function ErrorNotFound() {
  let urlpath = useParams()["*"];
  
  return (
    <div className="pagina">
      <h1 style={{textAlign: "center"}}>
        404 Not Found
      </h1>
      <p style={{textAlign: "center"}}>
        Não foi possível encontrar a página requisitada na URL "/{urlpath}".
      </p>
    </div>
  );
}

export default ErrorNotFound;
