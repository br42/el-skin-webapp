import api from './api';
import { API_CONFIG } from 'config/APIConfig';

export type ProductCardTag = {
  name: string,
  fgcolor?: string
  bgcolor?: string
}

export type ProductCardItem = {
  id: string|number,
  name: string,
  description?: string,
  desconto?: string,
  price: number,
  tags: ProductCardTag[],
  image: string,
  url?: string
};

export const productService = {
  async getProducts(): Promise<ProductCardItem[]> {
    const response = await api.get<ProductCardItem[]> (API_CONFIG.ENDPOINTS.PRODUCTS);
    return response.data;
  },
  
  async getProductById(id: string|number): Promise<ProductCardItem> {
    const response = await api.get<ProductCardItem>(`${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`);
    return response.data;
  }
};
