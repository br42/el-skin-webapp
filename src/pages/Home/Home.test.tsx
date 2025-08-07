import BuscaContextProvider from 'context/BuscaContext';
import Home from './Home';
import { cleanup, render, screen } from 'test-utils';
import CarrinhoContextProvider from 'context/CarrinhoContext';

describe('Testando página Home', () => {
  test('Deve renderizar com categorias', () => {
    render(
      <BuscaContextProvider>
        <CarrinhoContextProvider>
          <Home />
        </CarrinhoContextProvider>
      </BuscaContextProvider>
      , {}
    );
    //const categorias = screen.getAllByTestId('home-categorias');
    const categorias = screen.getAllByTestId('banner-compra');
    
    expect(categorias).not.toBeUndefined();
    expect(categorias).not.toBeNull();
    expect(categorias).not.toBe(Array);
    expect(categorias).not.toHaveLength(0);
    
    cleanup();
    //expect(true).toBeTruthy();
  });
});

const testefn = function* () {
  yield Symbol();
};

testefn().next();
testefn().return();
