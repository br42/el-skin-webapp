import { act, cleanup, render, screen } from 'test-utils';
import Home from './page';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');
// # const mockNavigate = jest.fn();
// # jest.mock('react-router-dom', () => ({
// #   ...jest.requireActual('react-router-dom'),
// #   useNavigate: () => mockNavigate
// # }));

describe('Testando página "Home"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Deve renderizar página "Home" com categorias', async () => {
    render(await act(() =>
      <Home />
    ), {}
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
