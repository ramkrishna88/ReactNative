import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import productReducer from '@reducer/productslice';

const store = configureStore({
  reducer: productReducer,
});

export default store;
