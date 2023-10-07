// App.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavigationScreen from './navigation/Navigation';
import {AuthProvider} from './context/AuthProvider';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <AuthProvider>
        <NavigationScreen />
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
