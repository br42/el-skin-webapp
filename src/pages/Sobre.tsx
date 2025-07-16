import React from 'react';
import './Sobre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import rightImg from '../assets/images/image 12.png';
import leftImg from '../assets/images/image 7.png';
import wideImg from '../assets/images/image 13.png';

function Sobre() {
  return (
    <div className="pagina">
      <h1>
        Sobre a AL SKIN
      </h1>
      <p>
        QUEM SOMOS
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <p>
        POR QUE EXISTIMOS?
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
      <p>
        O QUE A GENTE FAZ?
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
      
      <img alt="" className="sobre-img-float-right" src={rightImg} />
      
      <img alt="" className="sobre-img-float-left" src={leftImg} />
      
      <p>
        VAMOS CONVERSAR?
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
      </p>
      
      <button className="button-contact">
        <FontAwesomeIcon icon={faComment} />
        Fale conosco
      </button>
      
      <img alt="" className="sobre-img-fill-width" src={wideImg} />
      
    </div>
  );
}

export default Sobre;
