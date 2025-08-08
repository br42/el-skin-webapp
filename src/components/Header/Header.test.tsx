import BuscaContextProvider, { /*useBuscaContext*/ } from 'context/BuscaContext';
import Header from './Header';
import { cleanup, render, screen } from 'test-utils';
import CarrinhoContextProvider from 'context/CarrinhoContext';
import { act } from 'react';
import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Testando componente Header', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Deve conter modal de Carrinho', async () => {
    const HeaderMock = () => (<Header />);
    
    render(await act(() =>
      <BuscaContextProvider>
        <CarrinhoContextProvider>
          <HeaderMock />
        </CarrinhoContextProvider>
      </BuscaContextProvider>
    ));
    
    const carrinho = screen.getByTestId('carrinho-modal');
    expect(carrinho).toBeInTheDocument();
    
    cleanup();
  });
  test('Deve conter modal de Carrinho', async () => {
    const HeaderMock = () => (<Header />);
    
    render(await act(() =>
      <BuscaContextProvider>
        <CarrinhoContextProvider>
          <HeaderMock />
        </CarrinhoContextProvider>
      </BuscaContextProvider>
    ));
    
    const carrinhoModal = screen.getByTestId('carrinho-modal');
    expect(carrinhoModal).toBeInTheDocument();
    
    cleanup();
  });
  test('Deve renderizar modal de Carrinho, carrinho vazio', async () => {
    render(await act(() =>
      <BuscaContextProvider>
        <CarrinhoContextProvider>
          <Header />
        </CarrinhoContextProvider>
      </BuscaContextProvider>
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
    
    userEvent.click(carrinhoButton);
    expect(carrinhoModal).not.toHaveStyle({display: 'none'});
    userEvent.type(carrinhoModal, '\x1b');
    expect(carrinhoModal).toHaveStyle({display: 'none'});
    
    cleanup();
  });
  test('Deve executar Busca', async () => {
    render(await act(() =>
      <BuscaContextProvider>
        <CarrinhoContextProvider>
          <Header />
        </CarrinhoContextProvider>
      </BuscaContextProvider>
    ));
    
    const searchbox = screen.getByTestId('header-searchboxinput');
    const iconelupa = screen.getByTestId('header-lupa');
    
    userEvent.type(searchbox, 'creme');
    userEvent.click(iconelupa);
    
    //jest.fn(async () => await act(() => {
    //  const { busca, setBusca } = useBuscaContext();
    //  expect(setBusca).toBeCalled();
    //  expect(busca).toBe('creme');
    //  return <></>;
    //}));
    
    cleanup();
  });
});
