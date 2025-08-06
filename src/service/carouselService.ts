import api from './api';
import { API_CONFIG } from 'config/APIConfig';

export interface CarouselImagem {
  id: number,
  subtitle: string,
  title: string,
  description: string,
  desconto?: string,
  cupom?: string,
  backgroundImage: string,
  url?: string
};

export const carouselService = {
  async getCarouselItems(): Promise<CarouselImagem[]> {
    const response = await api.get<CarouselImagem[]>(API_CONFIG.ENDPOINTS.CAROUSEL);
    return response.data;
  }
};
