import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from '.././features/ListItems/ItemsList';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;
