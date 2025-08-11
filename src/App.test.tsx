import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import App from './App';

// # import { useNavigate } from 'react-router';
jest.mock('service/api.ts');
jest.mock('service/carouselService.ts');
jest.mock('service/productService.ts');
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

//jest.mock('components/Carousel/Carousel.tsx', () => ({
//  ...jest.requireActual('components/Carousel/Carousel.tsx'),
//  obterImagens: jest.fn(() => [])
//}));

describe('Testando página Home', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Deve renderizar o logo da AL SKIN', async () => {
    render(await act(() => <App />));
    const linkElements = screen.getAllByText(/AL SKIN/i);
    expect(linkElements[0]).toBeInTheDocument();
    cleanup();
  });
});
