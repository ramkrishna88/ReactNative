import {configureStore} from '@reduxjs/toolkit';
import userAuth from '.././features/Authentication/Authentication';
import itemsReducer from '.././features/ListItems/ItemsList';
import cartSlice from '.././features/CartItems/cartItems';

const store = configureStore({
  reducer: {
    user: userAuth,
    items: itemsReducer,
    cart: cartSlice,
  },
});

export default store;
