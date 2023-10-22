import React, {useState, useEffect} from 'react';
import {Image, View, Text, TouchableOpacity, Alert} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';
import perf from '@react-native-firebase/perf';
import remoteConfig from '@react-native-firebase/remote-config';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailLabel, setEmailLabel] = useState('');
  const [passwordLabel, setPasswordLabel] = useState('');
  const [loginText, setLoginText] = useState('');
  const [registerText, setRegisterText] = useState('');

  useEffect(() => {
    try {
      // Start a trace for the LoginScreen component
      const trace = perf().startTrace('LoginScreen');

      // Stop the trace when the component unmounts
      return () => {
        if (trace && typeof trace.stop === 'function') {
          trace.stop();
        } else {
          console.warn('Trace object or stop method is not defined');
        }
      };
    } catch (error) {
      console.error('Error starting screen trace:', error);
    }
  }, []);

  useEffect(() => {
    remoteConfig()
      .fetchAndActivate()
      .then(activated => {
        if (activated) {
          console.log('Remote config values activated.');
          // Get the remote config values and update the state
          setEmailLabel(remoteConfig().getValue('email').asString());
          setPasswordLabel(remoteConfig().getValue('password').asString());
          setLoginText(remoteConfig().getValue('login').asString());
          setRegisterText(remoteConfig().getValue('login_register').asString());
        } else {
          console.log('Remote config values not activated.');
        }
      })
      .catch(error => {
        console.log('Error fetching remote config values:', error);
      });
  }, []);

  const handleLogin = async () => {
    try {
      // Start a trace for the login function
      const perfObj = perf();
      if (!perfObj) {
        throw new Error('perf() returned null or undefined');
      }
      const trace = perfObj.startTrace('LoginFunction');
      if (!trace) {
        throw new Error('startTrace() returned null or undefined');
      }

      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');

      // Log a login event to analytics
      analytics().logEvent('Login', {
        email: email,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
      console.log(error);
      crashlytics().recordError(error);
      analytics().logEvent('LoginError', {
        error: error.message,
      });
    }
  };

  const handleRegister = () => {
    try {
      // Start a trace for the register function
      const perfObj = perf();
      if (!perfObj) {
        throw new Error('perf() returned null or undefined');
      }
      const trace = perfObj.startTrace('RegisterFunction');
      if (!trace) {
        throw new Error('startTrace() returned null or undefined');
      }

      navigation.navigate('Register');

      // Stop the trace when the register function completes
      return () => {
        if (typeof trace.stop === 'function') {
          trace.stop();
        } else {
          console.warn('Trace object or stop method is not defined');
        }
      };
    } catch (error) {
      console.error('Error starting register trace:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/564x/16/dc/79/16dc794e4668862b6349ddb3b8244e67.jpg',
        }}
      />
      <Card>
        <Card.Content>
          <TextInput
            label={emailLabel}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            label={passwordLabel}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </Card.Content>
        <TouchableOpacity style={styles.touchButton} onPress={handleLogin}>
          <Text>{loginText}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchButton} onPress={handleRegister}>
          <Text>{registerText}</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default LoginScreen;
