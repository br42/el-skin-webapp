import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  busca: string;
}

const estadoInicial: SearchState = {
  busca: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: estadoInicial,
  reducers: {
    setSearch: (state: SearchState, action: {
      payload: string;
      type: string;
    }) => {
      state.busca = action.payload;
    },
    clearSearch: (state: SearchState) => {
      state.busca = '';
    },
  }
});

export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;
