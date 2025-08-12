// # import './Carousel.css';
import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CarouselImagem, carouselService,  } from 'service/carouselService';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const CarouselMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: auto;
  width: auto;
  height: auto;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 16px 16px;;
  font-size: 24px;
`;

const CarouselImage = styled.picture`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  max-width: 100dvw;
  width: 100%;
  height: 50dvw;
  max-height: 800px;
  min-height: 240px;
  image-rendering: auto;
  background-image: none;
  background-size: cover;
  background-position: center;
`;

const CarouselButton = styled.button`
  background-color: #c0c0c080;
  color: #FFFFFF;
  font-size: 32px;
  max-width: 1.5em;
  max-height: 1.5em;
  width: 1.5em;
  height: 1.5em;
  justify-items: center;
  vertical-align: middle;
  border: solid 1px #707070;
  border-radius: 8px;
  padding: 0px 0px;
  backdrop-filter: blur(4px);
`;

const CarouselButtonLeft = styled(CarouselButton)`
  position: absolute;
  float: left;
  left:  64px;
`;

const CarouselButtonRight = styled(CarouselButton)`
  position: absolute;
  float: right;
  right: 64px;
`;

const CarouselImageBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  height: 300px;
  max-height: 100%;
  width: 300px;
  max-width: 100%;
  margin-left: calc(max(10%, 100px));
  margin-right: auto;
  color: #94426E;
  font-size: 18px;
  background-color: #FFFFFF80;
  border: solid 1px #80808080;
  padding: 16px 8px;
  border-radius: 16px;
  overflow: clip;
  backdrop-filter: blur(2px);
`;

const CarouselImageBannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: clip;
`;

const CarouselImageBannerTop = styled.div`
  font-size: 18px;
  color: #94426E;
`;

const CarouselImageBannerTitle = styled.div`
  font-size: 36px;
  color: #94426E;
  font-weight: 700;
`;

const CarouselImageBannerDesconto = styled.div`
  font-size: 18px;
  color: #FFFFFF;
  background-color: #DC5E5E;
  border-radius: 8px;
  font-weight: 700;
  width: fit-content;
  padding: 8px 16px;
  margin: 4px 32px;
  text-shadow: none;
`;

const CarouselImageBannerBottom = styled.div`
  font-size: 12px;
  color: #94426E;
`;

const CarouselImageBannerCupom = styled.div`
  border: 1px dashed #94426E;
  font-size: 18px;
  color: #94426E;
  font-weight: 700;
  width: fit-content;
  padding: 8px 16px;
  margin: 8px 16px;
`;

const CarouselImageBannerBotaoComprar = styled.button`
  margin-top: 16px;
  background-color: #7045F5;
  cursor: pointer;
`;

function Carousel () {
  const [carouselImage, setCarouselImage] = useState(0);
  const [imagens, setImagens] = useState([] as CarouselImagem[]);
  
  useEffect(() => {
    async function obterImagens () {
      const novasImagens = await carouselService.getCarouselItems();
      setImagens(novasImagens);
    }
    
    obterImagens();
  },[]);
  
  const nextItem = useCallback(function () {
    setCarouselImage((item) => ((item + 1) % (imagens.length ? imagens.length : 1)));
  }, [imagens]);
  
  const previousItem = useCallback(function () {
    setCarouselImage((item) => ((imagens.length + item - 1) % (imagens.length ? imagens.length : 1)));
  }, [imagens]);
  
  useEffect((() => {
    const timer = setInterval(() => {
      nextItem();
    }, 5000);
    
    return (() => {
      clearInterval(timer);
    });
  }), [nextItem]);
  
  return (
    <CarouselMain>
      <CarouselButtonLeft onClick={previousItem}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </CarouselButtonLeft>
      <CarouselButtonRight onClick={nextItem}>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </CarouselButtonRight>
      <CarouselImage style={{backgroundImage: `url('${imagens[carouselImage]?.backgroundImage}')`}} title={`${imagens[carouselImage]?.title}`}>
        <CarouselImageBannerContainer>
          <CarouselImageBannerText>
            <CarouselImageBannerTop>
              {imagens[carouselImage]?.subtitle || null}
            </CarouselImageBannerTop>
            <CarouselImageBannerTitle>
              {imagens[carouselImage]?.title || null}
            </CarouselImageBannerTitle>
            {
              imagens[carouselImage]?.desconto &&
              <CarouselImageBannerDesconto>
                {imagens[carouselImage]?.desconto || null}
              </CarouselImageBannerDesconto>
            }
            <CarouselImageBannerBottom>
              {imagens[carouselImage]?.description || null}
            </CarouselImageBannerBottom>
            {
              imagens[carouselImage]?.cupom && 
              <CarouselImageBannerCupom>
                {imagens[carouselImage]?.cupom || null}
              </CarouselImageBannerCupom>
            }
          </CarouselImageBannerText>
          <NavLink to={imagens[carouselImage]?.url || '#'}>
            <CarouselImageBannerBotaoComprar>
              <span>
                {'comprar agora'}
              </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </CarouselImageBannerBotaoComprar>
          </NavLink>
        </CarouselImageBannerContainer>
      </CarouselImage>
    </CarouselMain>
  );
}

export default Carousel;

