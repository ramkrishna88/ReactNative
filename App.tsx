import React from 'react';
import NavigationScreen from './src/navigation/NavigationScreen';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {productsApi} from './src/features/Products/apiSlice';

const App = () => {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <NavigationScreen />
      </ApiProvider>
    </Provider>
  );
};

export default App;
