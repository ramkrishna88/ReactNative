import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const RegisterScreen = ({navigation}) => {
  const imageUrl =
    'https://m.media-amazon.com/images/I/71qKpIG4Q2L._AC_SL1500_.jpg'; // Replace with your image URL

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: imageUrl}} style={styles.logo} />
      </View>
      <View style={styles.backgroundTop} />
      <View style={styles.card}>
        <Text style={styles.text}>Create an Account</Text>
        <Text style={styles.text}>Sign up to get started</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#999"
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
