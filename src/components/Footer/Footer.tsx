import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube, faPinterest, faTwitter, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import NavLink from 'next/link';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-social-icons">
          <NavLink href="#" title="Instagram">
            <div className="footer-social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </NavLink>
          <NavLink href="#" title="Facebook">
            <div className="footer-social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
          </NavLink>
          <NavLink href="#" title="Youtube">
            <div className="footer-social-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </NavLink>
          <NavLink href="#" title="Pinterest">
            <div className="footer-social-icon">
              <FontAwesomeIcon icon={faPinterest} />
            </div>
          </NavLink>
          <NavLink href="#" title="Chirper">
            <div className="footer-social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </NavLink>
          <NavLink href="#" title="Linkedin">
            <div className="footer-social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </NavLink>
          <NavLink href="#" title="Spotify">
            <div className="footer-social-icon">
              <FontAwesomeIcon icon={faSpotify} />
            </div>
          </NavLink>
        </div>
        <nav className="footer-nav">
          <div>
            <p className="footer-nav-categoria">
              Sobre a AL SKIN
            </p>
            <NavLink href="/sobre">
              Quem somos
            </NavLink>
            <NavLink href="/sobre">
              Time AL SKIN
            </NavLink>
            <NavLink href="/sobre">
              Carreiras
            </NavLink>
          </div>
          <div>
            <p className="footer-nav-categoria">
              Loja AL SKIN
            </p>
            <NavLink href="/">
              Lojas Físicas
            </NavLink>
            <NavLink href="/">
              Devolução
            </NavLink>
          </div>
          <div>
            <p className="footer-nav-categoria">
              Fale conosco
            </p>
            <NavLink href="/faleconosco">
              oi@alskin.com.br
            </NavLink>
            <NavLink href="/faleconosco">
              Ajuda
            </NavLink>
          </div>
          <div>
            <p className="footer-nav-categoria">
              Mais sobre a AL SKIN
            </p>
            <NavLink href="/blog">
              Blog
            </NavLink>
            <NavLink href="/blog">
              Minha pele
            </NavLink>
            <NavLink href="/blog">
              Ingredientes
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-contents">
          <h1 className="footer-logo">
            AL SKIN
          </h1>
          <p>
            2023 AL SKIN. Todos os direitos reservados.
          </p>
          <p>
            Av. Sete de Setembro, 467 - São Paulo/SP - CEP: 05324-980.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
