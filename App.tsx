import React from 'react';
import NavigationScreen from './navigation/NavigationScreen';
import store from './store/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  );
}
export default App;
