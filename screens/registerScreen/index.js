import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, Text, ImageBackground} from 'react-native';
import {useAuth} from '../../context/AuthProvider';
import styles from './styles';
import * as Animatable from 'react-native-animatable'; // Import Animatable
import Icon from 'react-native-vector-icons/FontAwesome';

function RegisterScreen({navigation}) {
  const {login} = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(
    'https://picsum.photos/200/300',
  );

  // Change the background image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Fetch a new image URL or generate one as needed
      const newImage = 'https://picsum.photos/200/300?random=' + Math.random();
      setBackgroundImage(newImage);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleRegister = async () => {
    if (!name || !email || !password || password !== confirmPassword) {
      setError('Please fill in all fields and ensure passwords match.');
      return;
    }

    const userData = {name, email, password};
    login(userData);
    navigation.navigate('AuthenticatedTabs', {
      screen: 'Home',
      params: {screen: 'Home'},
    });
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{uri: backgroundImage}}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{
            width: 400,
            height: 300,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="user-circle" size={250} color="red" />
        </Animatable.View>
        {error ? <Text style={styles.redItalicText}>{error}</Text> : null}
        <TextInput
          placeholder="Full Name"
          placeholderTextColor={'red'}
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={'red'}
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'red'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor={'red'}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button title="Register" onPress={handleRegister} color="red" />
          <Button
            title="Already registered? Please Login"
            onPress={handleLogin}
            color="red"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default RegisterScreen;
