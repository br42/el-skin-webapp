// # import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube, faPinterest, faTwitter, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const FooterMain = styled.footer`
  display: block;
  width: 100dvw;
  max-width: 100dvw;
  max-height: auto;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  width: 100dvw;
  max-height: auto;
  padding: 32px 0px;
  margin: 0px 0px;
  color: #212121;
  background-color: #F4F4F4;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: top;
  align-content: top;
  justify-content: space-evenly;
  width: auto;
  max-width: 100vw;
  max-height: auto;
  padding: 32px 0px;
  padding-bottom: 24px;
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: transparent;

& * {
  display: flex;
  flex-direction: column;
  margin: 0px 0px;
  margin-top: 8px;
  margin-bottom: 8px;
}

& a, & nav {
  cursor: pointer;
  text-decoration: underline;
  color: #878787;
  background-color: #F4F4F4;
}
`;

const FooterNavCategoria = styled.p`
  display: inline;
  margin-left: 0px;
  margin-right: 0px;
  font-weight: normal;
  font-size: inherit;
`;

const FooterLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: underline;
  color: #878787;
  background-color: #F4F4F4;
`;

const FooterAba = styled.div`
  display: inline;
  margin-left: 32px;
  margin-right: 32px;
  font-weight: normal;
  font-size: inherit;
`;

const FooterSocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  max-height: auto;
  padding: 16px 16px;
  max-width: 90%;
`;

const FooterSocialIcon = styled.div`
  color: #FFFFFF;
  background-color: #6E6E6E;
  font-size: 24px;
  width: 1.6em;
  height: 1.6em;
  text-align: center;
  align-content: center;
  border-radius: 50%;
  cursor: pointer;
  padding: 0px 0px;
  margin: 16px 16px;
`;

const FooterLogo = styled.h1`
  display: inline;
  color: #FFFFFF;
  font-family: 'Shippori Antique', 'Franklin Gothic', 'MS Gothic', 'MS PGothic', 'MS UI Gothic', 'Roboto', 'Arial', sans-serif;
  font-size: 24px;
  padding: 0px;
  margin: 0px;
  margin-right: 20px;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  max-width: 100dvw;
  max-height: auto;
  padding: 8px 8px;
  color: #FFFFFF;
  background-color: #212121;
`;

const FooterBottomContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  max-width: 100vw;
  max-height: auto;
  padding: 36px 8px;
  color: #FFFFFF;
  background-color: #212121;

& * {
  margin: 8px 0px;
  color: #FFFFFF;
}
`;

function Footer () {
  return (
    <FooterMain>
      <FooterTop>
        <FooterSocialIcons>
          <NavLink to="#" title="Instagram">
            <FooterSocialIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </FooterSocialIcon>
          </NavLink>
          <NavLink to="#" title="Facebook">
            <FooterSocialIcon>
              <FontAwesomeIcon icon={faFacebookF} />
            </FooterSocialIcon>
          </NavLink>
          <NavLink to="#" title="Youtube">
            <FooterSocialIcon>
              <FontAwesomeIcon icon={faYoutube} />
            </FooterSocialIcon>
          </NavLink>
          <NavLink to="#" title="Pinterest">
            <FooterSocialIcon>
              <FontAwesomeIcon icon={faPinterest} />
            </FooterSocialIcon>
          </NavLink>
          <NavLink to="#" title="Chirper">
            <FooterSocialIcon>
              <FontAwesomeIcon icon={faTwitter} />
            </FooterSocialIcon>
          </NavLink>
          <NavLink to="#" title="Linkedin">
            <FooterSocialIcon>
              <FontAwesomeIcon icon={faLinkedin} />
            </FooterSocialIcon>
          </NavLink>
          <FooterLink to="#" title="Spotify">
            <FooterSocialIcon>
              <FontAwesomeIcon icon={faSpotify} />
            </FooterSocialIcon>
          </FooterLink>
        </FooterSocialIcons>
        <FooterNav>
          <FooterAba>
            <FooterNavCategoria>
              Sobre a AL SKIN
            </FooterNavCategoria>
            <FooterLink to="/sobre">
              Quem somos
            </FooterLink>
            <FooterLink to="/sobre">
              Time AL SKIN
            </FooterLink>
            <FooterLink to="/sobre">
              Carreiras
            </FooterLink>
          </FooterAba>
          <FooterAba>
            <FooterNavCategoria>
              Loja AL SKIN
            </FooterNavCategoria>
            <FooterLink to="/">
              Lojas Físicas
            </FooterLink>
            <FooterLink to="/">
              Devolução
            </FooterLink>
          </FooterAba>
          <FooterAba>
            <FooterNavCategoria>
              Fale conosco
            </FooterNavCategoria>
            <FooterLink to="/faleconosco">
              oi@alskin.com.br
            </FooterLink>
            <FooterLink to="/faleconosco">
              Ajuda
            </FooterLink>
          </FooterAba>
          <FooterAba>
            <FooterNavCategoria>
              Mais sobre a AL SKIN
            </FooterNavCategoria>
            <FooterLink to="/blog">
              Blog
            </FooterLink>
            <FooterLink to="/blog">
              Minha pele
            </FooterLink>
            <FooterLink to="/blog">
              Ingredientes
            </FooterLink>
          </FooterAba>
        </FooterNav>
      </FooterTop>
      <FooterBottom>
        <FooterBottomContents>
          <FooterLogo>
            AL SKIN
          </FooterLogo>
          <p>
            2023 AL SKIN. Todos os direitos reservados.
          </p>
          <p>
            Av. Sete de Setembro, 467 - São Paulo/SP - CEP: 05324-980.
          </p>
        </FooterBottomContents>
      </FooterBottom>
    </FooterMain>
  );
}

export default Footer;
