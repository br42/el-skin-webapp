import './Sobre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import rightImg from 'assets/images/image 12.png';
import leftImg from 'assets/images/image 7.png';
import wideImg from 'assets/images/image 13.png';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div className="pagina">
      <div className="sobre-container">
        <div className="sobre-container-left">
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
        
          <img alt="" className="sobre-img-float-left float-left" src={leftImg} />
        </div>
        
        <div className="sobre-container-right">
          <img alt="" className="sobre-img-float-right float-right" src={rightImg} />
          
          <p>
            VAMOS CONVERSAR?
            <br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
          
          <p>
            <Link to="/faleconosco">
              <button className="button-contact">
                <FontAwesomeIcon icon={faComment} />
                <span>
                  Fale conosco
                </span>
              </button>
            </Link>
          </p>
        </div>
      </div>
      <div className="sobre-container-bottom">
        <img alt="" className="sobre-img-fill-width" src={wideImg} />
      </div>
    </div>
  );
}

export default Sobre;
