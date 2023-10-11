import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {loginAction} from '../.././features/Authentication/Authentication';

const LoginScreen = ({navigation}) => {
  const imageUrl =
    'https://m.media-amazon.com/images/I/71qKpIG4Q2L._AC_SL1500_.jpg';

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = {
      email,
      password,
    };
    dispatch(loginAction(user));
    navigation.navigate('Home');
  };

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
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
