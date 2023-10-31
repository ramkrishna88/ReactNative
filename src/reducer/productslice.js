import {createSlice} from '@reduxjs/toolkit';
import {fetchProducts} from '../action/fetchProduct';

const productSlice = createSlice({
  name: 'products',
  initialState: {popularMovies: [], loading: 'false', error: false},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default productSlice.reducer;
