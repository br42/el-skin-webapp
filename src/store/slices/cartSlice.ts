import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CarrinhoItem = {
  id: string|number,
  name: string,
  quantidade: number,
  preco: number,
  image: string,
  url: string,
  // # [prop: string]: unknown
};

export interface CartState {
  itens: CarrinhoItem[];
}

const estadoInicial: CartState = {
  itens: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: estadoInicial,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CarrinhoItem, 'quantidade'>>) => {
      const itemExistente = state.itens.find(item => item.id === action.payload.id);
      if (itemExistente) {
        itemExistente.quantidade++;
      } else {
        state.itens.push({ ...action.payload, quantidade: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<{ id: string|number }>) => {
      const indice = state.itens.findIndex(item => item.id === action.payload.id);
      if (indice !== -1) {
        state.itens.splice(indice, 1);
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: string|number, quantidade: number }>) => {
      const { id, quantidade } = action.payload;
      const indice = state.itens.findIndex(item => item.id === id);
      
      if (indice === -1) return;
      
      if (quantidade <= 0) {
        state.itens.splice(indice, 1);
      } else {
        state.itens[indice].quantidade = quantidade;
      }
    },
    clearCart: (state) => {
      state.itens = [];
    }
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
