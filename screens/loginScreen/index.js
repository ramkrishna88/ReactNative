import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, Text, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../../context/AuthProvider';
import styles from './styles';
import * as Animatable from 'react-native-animatable'; // Import Animatable
import Icon from 'react-native-vector-icons/FontAwesome';

function LoginScreen({navigation}) {
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(
    'https://picsum.photos/200/300',
  );

  // Reset the fields when the component mounts
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setEmail('');
      setPassword('');
      setError('');
    });

    return unsubscribe;
  }, [navigation]);

  // Change the background image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Fetch a new image URL or generate one as needed
      const newImage = 'https://picsum.photos/200/300?random=' + Math.random();
      setBackgroundImage(newImage);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = async () => {
    // Clear previous error messages
    setError('');

    // Validate user input
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Retrieve user data from AsyncStorage
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);

        // Validate user input and check if credentials match
        if (userData.email === email && userData.password === password) {
          // Successful login
          login(userData);
          // Navigate to the HomeScreen or any other appropriate screen
          navigation.navigate('AuthenticatedTabs', {
            screen: 'Home',
            params: {screen: 'Home'},
          });
        } else {
          // Invalid credentials
          setError('Invalid email or password.');
        }
      } else {
        // User data not found
        setError('User data not found.');
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      setError('Error loading user data.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={{uri: backgroundImage}}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Animatable.View
          animation="pulse" // Specify the animation type (pulse)
          easing="ease-out"
          iterationCount="infinite"
          style={{
            width: 400,
            height: 300,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="user" size={250} color="red" />
        </Animatable.View>
        {error ? (
          <Text style={[styles.errorMessage, styles.redItalicText]}>
            {error}
          </Text>
        ) : null}
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button title="Login" onPress={handleLogin} color="red" />
          <Button title="Register" onPress={handleRegister} color="red" />
        </View>
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;
