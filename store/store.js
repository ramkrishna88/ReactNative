import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from '.././features/ListItems/ItemsList';
import cartSlice from '.././features/CartItems/cartItems';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartSlice,
  },
});

export default store;
