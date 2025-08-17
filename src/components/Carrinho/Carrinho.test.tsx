import { useSearch } from 'hooks/useSearch';
import Carrinho from './Carrinho';
import Header from 'components/Header/Header';
import { act, cleanup, render, renderHook, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';
import Home from 'app/page';
import Footer from 'components/Footer/Footer';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
//jest.mock('service/carouselService.ts');
//const mockProductService = jest.fn();
//jest.mock('service/productService.ts');

describe('Testando componente "Carrinho"', () => {
  afterEach(() => {
    //jest.restoreAllMocks();
  });
  test('Deve existir modal de Carrinho dentro do Header', async () => {
    await act(() => render(
      <Header />
    ));
    
    const carrinho = screen.getByTestId('carrinho-modal');
    expect(carrinho).toBeInTheDocument();
    
    cleanup();
  });
  test('Deve conter modal de Carrinho', async () => {
    const HeaderMock = () => (<Header />);
    
    await act(() => render(
      <HeaderMock />
    ));
    
    const carrinhoModal = screen.getByTestId('carrinho-modal');
    expect(carrinhoModal).toBeInTheDocument();
    
    cleanup();
  });
  test('Deve renderizar modal de Carrinho, carrinho vazio', async () => {
    const closefn = jest.fn();
    
    await act(() => render(
      <Carrinho isAberto={true} onClose={closefn} />
    ));
    
    //const carrinhoModal = screen.getByTestId('carrinho-modal');
    const carrinhoModalFechar = screen.getByTestId('carrinho-modal-fechar');
    userEvent.click(carrinhoModalFechar);
    expect(closefn).toHaveBeenCalledTimes(1);
    
    cleanup();
  });
  test('Deve renderizar modal de Carrinho, carrinho cheio', async () => {
    await act(async () => render(
      <Header />
    ));
    
    const carrinhoModal = screen.getByTestId('carrinho-modal');
    const carrinhoButton = screen.getByTestId('header-iconcart');
    
    userEvent.click(carrinhoButton);
    expect(carrinhoModal).toBeInTheDocument();
    expect(carrinhoModal).not.toHaveStyle({display: 'none'});
    
    userEvent.click(carrinhoModal);
    expect(carrinhoModal).toHaveStyle({display: 'none'});
    
    userEvent.click(carrinhoButton);
    const carrinhoModalFechar = screen.getByTestId('carrinho-modal-fechar');
    userEvent.click(carrinhoModalFechar);
    expect(carrinhoModal).toHaveStyle({display: 'none'});
    
    const botoesComprar = screen.queryAllByText('comprar');
    
    botoesComprar.forEach((item) => {
      userEvent.click(item);
    });
    
    userEvent.click(carrinhoButton);
    expect(carrinhoModal).not.toHaveStyle({display: 'none'});
    userEvent.type(carrinhoModal, '\x1b');
    expect(carrinhoModal).toHaveStyle({display: 'none'});
    
    cleanup();
  });
  test('Deve realizar ações de compra, e exibir no Carrinho', async () => {
    const MockHome = () => {
      const state = useRef(0);
      state.current++;
      
      return <>
        <Header/>
        <Home/>
        <Footer/>
      </>;
    };
    
    //const renderresult = 
    await act(async () => render(
      <MockHome />
    ));
    
    const carrinhoModal = screen.getByTestId('carrinho-modal');
    const carrinhoButton = screen.getByTestId('header-iconcart');
    
    const botoesComprar = screen.getAllByText('comprar');
    
    botoesComprar.forEach((item) => {
      userEvent.click(item);
    });
    
    userEvent.click(carrinhoButton);
    expect(carrinhoModal).not.toHaveStyle({display: 'none'});
    
    userEvent.click(screen.getAllByTestId('carrinho-quantidade-button-plus')[0]);
    userEvent.click(screen.getAllByTestId('carrinho-quantidade-button-minus')[0]);
    userEvent.click(screen.getAllByTestId('carrinho-remover-button')[0]);
    
    userEvent.type(carrinhoModal, '\x1b');
    expect(carrinhoModal).toHaveStyle({display: 'none'});
    
    //renderresult.rerender(<Home/>);
    
    cleanup();
  });
  test('Deve executar Busca', async () => {
    await act(async () => render(
      <Header />
    ));
    
    const searchbox = screen.getByTestId('header-searchboxinput');
    const iconelupa = screen.getByTestId('header-lupa');
    
    userEvent.type(searchbox, 'creme');
    userEvent.click(iconelupa);
    
    expect(searchbox).toHaveValue('creme');
    
    renderHook(async () => await act(async () => {
      const { busca } = useSearch();
      expect(busca).toBe('creme');
    }));
    
    cleanup();
  });
});
