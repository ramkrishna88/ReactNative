import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>This is the home screen</Text>
    </View>
  );
};

export default HomeScreen;
