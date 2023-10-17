import {configureStore} from '@reduxjs/toolkit';
import {productsApi} from 'src/features/Products/apiSlice';

export const store = configureStore({
  reducer: {
    productApi: productsApi.reducer,
  },
});
