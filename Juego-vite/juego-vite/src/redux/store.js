import { configureStore } from '@reduxjs/toolkit';
import cartasSlice from './cartasSlice';

export const store = configureStore({
  reducer: {
    cartasSlice,
  },
})