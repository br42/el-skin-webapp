import { act, cleanup, render, screen } from 'test-utils';
import Carousel from './Carousel';
import userEvent from '@testing-library/user-event';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
//jest.mock('service/carouselService.ts');

describe('Testando componente "Carousel"', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });
    
  test('Componente "Carousel" deve avançar e voltar', async () => {
    const userEventDelayed = userEvent.setup({advanceTimers: jest.advanceTimersByTime});
    
    await act(async () => render(
      <Carousel />
    ));
    
    const leftButton = screen.getByTestId('carousel-button-left');
    const rightButton = screen.getByTestId('carousel-button-right');
    
    await act(async () => userEventDelayed.click(rightButton));
    await act(async () => userEventDelayed.click(rightButton));
    
    await act(async () => userEventDelayed.click(leftButton));
    await act(async () => userEventDelayed.click(leftButton));
    
    cleanup();
  });
});
