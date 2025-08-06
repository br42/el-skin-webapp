import Home from './Home';
import { render, screen } from 'test-utils';

describe('Testando página Home', () => {
  test('Deve renderizar com categorias', () => {
    render(<Home />, {});
    const categorias = screen.getAllByTestId('home-categorias');
    
    expect(categorias).not.toBeUndefined();
    expect(categorias).not.toBeNull();
    expect(categorias).not.toBe(Array);
    expect(categorias).not.toHaveLength(0);
    //expect(categorias).not.;
    
    //expect(true).toBeTruthy();
  });
});
