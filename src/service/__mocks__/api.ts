// # import axios from 'axios';
import { API_CONFIG } from 'config/APIConfig';
import { mockGetListaProdutos, mockGetListaCarousel } from 'test-utils';

const api = {
  get: async (url: string, config: {[prop in string]: unknown} = {}) => {
    const response = { data: undefined } as { data: unknown };
    if (typeof config !== 'object') {
      throw new Error('[API] Config inválida');
    }
    if (url === API_CONFIG.ENDPOINTS.CAROUSEL) {
      response.data = mockGetListaCarousel();
    } else if (url === API_CONFIG.ENDPOINTS.PRODUCTS) {
      response.data = mockGetListaProdutos();
    } else if (url.startsWith(`${API_CONFIG.ENDPOINTS.PRODUCTS}/`)) {
      try {
        const id = Number(url.replace(`${API_CONFIG.ENDPOINTS.PRODUCTS}/`, ''));
        response.data = mockGetListaProdutos().find((item)=>item.id===id);
      } catch (e: unknown) {
        throw new Error('[API] Erro 404: Objeto não encontrado', { cause: e });
      }
    } else {
      throw new Error(`[API] URL inválida: "${url}"`);
    }
    return  response;
  }
};

export default api;
