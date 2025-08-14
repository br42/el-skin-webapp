import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
