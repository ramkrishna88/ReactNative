import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const imageUrl =
    'https://m.media-amazon.com/images/I/71qKpIG4Q2L._AC_SL1500_.jpg';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: imageUrl}} style={styles.logo} />
      </View>
      <View style={styles.backgroundTop} />
      <View style={styles.card}>
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text}>Sign in to continue</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>New user? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
