import React from 'react';
import NavigationScreen from './src/navigation/NavigationScreen';
import store from './src/store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  );
};
export default App;
