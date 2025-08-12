//import { Provider } from 'react-redux';
//import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, renderHook, RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';
import { routerFutureConfig } from 'routes';
import BuscaContextProvider from 'context/BuscaContext';
import CarrinhoContextProvider from 'context/CarrinhoContext';
import { ProductCardItem } from 'service/productService';
import { CarouselImagem } from 'service/carouselService';

const Provedores = ({ children } : { children: ReactNode }) => (
  //<Provider store={store}>
  //<div data-testid="context-children" />
  <BrowserRouter future={routerFutureConfig}>
    <Routes>
      <Route path="*" element={
        <BuscaContextProvider>
          <CarrinhoContextProvider>
            {children}
          </CarrinhoContextProvider>
        </BuscaContextProvider>
      } />
    </Routes>
  </BrowserRouter>
  //</Provider>
);

export const renderComProvedores = (ui: ReactNode, options: RenderOptions = {}) =>
  render(ui, {
    wrapper: Provedores,
    ...options,
  });

export const renderHookComProvedores = (hook: ()=>unknown, options: RenderOptions = {}) =>
  renderHook(hook, {
    wrapper: Provedores,
    ...options,
  });

export * from '@testing-library/react';

export { renderComProvedores as render, renderHookComProvedores as renderHook };

export const mockGetListaCarousel = () : CarouselImagem[] => {
  return [
    {
      'id': 1,
      'subtitle': 'confira nossa linha',
      'title': 'corporal',
      'description': 'com benefícios além da hidratação',
      'url': '#',
      'backgroundImage': 'assets/images/img1.png'
    },
    {
      'id': 2,
      'subtitle': 'confira nossa linha',
      'title': 'kits incríveis',
      'desconto': 'até 50% OFF',
      'description': 'use o cupom',
      'cupom': 'QUEROTODOS',
      'url': '#',
      'backgroundImage': 'assets/images/img3.png'
    },
    {
      'id': 3,
      'subtitle': 'toda linha',
      'title': 'anti-age',
      'desconto': 'com 15% OFF',
      'description': 'use o cupom',
      'cupom': 'ANTIAGE15',
      'url': '#',
      'backgroundImage': 'assets/images/img2.png'
    }
  ];
};

export const mockGetListaProdutos = () : ProductCardItem[] => {
  return [
    {
      'id': 1,
      'name': 'Creme Hidratante Facial',
      'description': 'Creme nutritivo para hidratação profunda da pele do rosto, com extrato de aloe vera.',
      'price': 45.99,
      'image': 'assets/images/prod1.jpg',
      'tags': [
        {
          'name': 'face',
          'bgcolor': '#5DD4DB',
          'fgcolor': '#FFFFFF'
        },
        {
          'name': 'hydration',
          'bgcolor': '#DB5DB1',
          'fgcolor': '#FFFFFF'
        }
      ]
    },
    {
      'id': 2,
      'name': 'Protetor Solar SPF 50',
      'description': 'Protetor solar de alta proteção contra raios UVA/UVB, resistente à água.',
      'price': 89.90,
      'image': 'assets/images/prod2.jpg',
      'tags': [
        {
          'name': 'protection',
          'bgcolor': '#5DD4DB',
          'fgcolor': '#FFFFFF'
        },
        {
          'name': 'sun',
          'bgcolor': '#DB5DB1',
          'fgcolor': '#FFFFFF'
        }
      ]
    },
    {
      'id': 3,
      'name': 'Máscara de Argila Verde',
      'description': 'Máscara purificante para controle de oleosidade e limpeza dos poros.',
      'price': 32.50,
      'image': 'assets/images/prod3.jpg',
      'tags': [
        {
          'name': 'face',
          'bgcolor': '#5DD4DB',
          'fgcolor': '#FFFFFF'
        },
        {
          'name': 'cleansing',
          'bgcolor': '#DB5DB1',
          'fgcolor': '#FFFFFF'
        }
      ]
    },
    {
      'id': 4,
      'name': 'Sérum Antirrugas',
      'description': 'Sérum com ácido hialurônico para redução de linhas finas e rugas.',
      'price': 78.20,
      'image': 'assets/images/prod4.jpg',
      'tags': [
        {
          'name': 'face',
          'bgcolor': '#5DD4DB',
          'fgcolor': '#FFFFFF'
        },
        {
          'name': 'anti-aging',
          'bgcolor': '#DB5DB1',
          'fgcolor': '#FFFFFF'
        }
      ]
    },
    {
      'id': 5,
      'name': 'Bálsamo Labial Hidratante',
      'description': 'Bálsamo com manteiga de karité para lábios ressecados e proteção diária.',
      'price': 12.75,
      'image': 'assets/images/prod5.jpg',
      'tags': [
        {
          'name': 'lips',
          'bgcolor': '#5DD4DB',
          'fgcolor': '#FFFFFF'
        },
        {
          'name': 'hydration',
          'bgcolor': '#DB5DB1',
          'fgcolor': '#FFFFFF'
        }
      ]
    },
    {
      'id': 6,
      'name': 'Esfoliante Facial',
      'description': 'Esfoliante suave com microesferas naturais para renovação da pele.',
      'price': 25.80,
      'image': 'assets/images/prod6.jpg',
      'tags': [
        {
          'name': 'face',
          'bgcolor': '#5DD4DB',
          'fgcolor': '#FFFFFF'
        },
        {
          'name': 'exfoliation',
          'bgcolor': '#DB5DB1',
          'fgcolor': '#FFFFFF'
        }
      ]
    },
    {
      'id': 7,
      'name': 'Tônico Revitalizante',
      'description': 'Tônico refrescante com extrato de chá verde para equilibrar o pH da pele.',
      'price': 38.40,
      'image': 'assets/images/prod7.jpg',
      'tags': [
        {
          'name': 'face',
          'bgcolor': '#5DD4DB',
          'fgcolor': '#FFFFFF'
        },
        {
          'name': 'toning',
          'bgcolor': '#DB5DB1',
          'fgcolor': '#FFFFFF'
        }
      ]
    },
    {
      'id': 8,
      'name': 'Óleo Corporal Hidratante',
      'description': 'Óleo leve com fragrância de lavanda para hidratação intensiva da pele.',
      'price': 65.30,
      'image': 'assets/images/prod8.jpg',
      'tags': [
        {
          'name': 'body',
          'bgcolor': '#5DD4DB',
          'fgcolor': '#FFFFFF'
        },
        {
          'name': 'hydration',
          'bgcolor': '#DB5DB1',
          'fgcolor': '#FFFFFF'
        }
      ]
    }
  ];
};
