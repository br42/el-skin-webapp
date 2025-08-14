import { act, cleanup, render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import Carousel from './Carousel';
import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
//jest.mock('service/carouselService.ts');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Testando componente "Carousel"', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
    
  test('Componente "Carousel" deve avançar e voltar', async () => {
    
    await act(async () => render(
      <Carousel />
    ));
    
    userEvent.click(screen.getByTestId('carousel-button-right'));
    userEvent.click(screen.getByTestId('carousel-button-right'));
    
    userEvent.click(screen.getByTestId('carousel-button-left'));
    userEvent.click(screen.getByTestId('carousel-button-left'));
    
    cleanup();
  });
});
