import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';
import perf from '@react-native-firebase/perf';
import {Platform} from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [firstNameLabel, setFirstNameLabel] = useState('');
  const [lastNameLabel, setLastNameLabel] = useState('');
  const [emailLabel, setEmailLabel] = useState('');
  const [passwordLabel, setPasswordLabel] = useState('');
  const [registerText, setRegisterText] = useState('');
  const [loginText, setLoginText] = useState('');

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    async function screenTrace() {
      try {
        const trace = await perf().startScreenTrace('RegisterScreen');
        if (Platform.OS === 'android') {
          trace.putAttribute('firstName', firstName);
          trace.putAttribute('lastName', lastName);
          trace.putAttribute('email', email);
          trace.putAttribute('password', password);
        }
        await trace.stop();
      } catch (e) {
        console.log(e);
        crashlytics().recordError(e);
      }
    }
    screenTrace();
  }, [firstName, lastName, email, password]);

  useEffect(() => {
    remoteConfig()
      .fetchAndActivate()
      .then(activated => {
        if (activated) {
          console.log('Remote config values activated.');
          setFirstNameLabel(remoteConfig().getValue('first_name').asString());
          setLastNameLabel(remoteConfig().getValue('last_name').asString());
          setEmailLabel(remoteConfig().getValue('email_register').asString());
          setPasswordLabel(
            remoteConfig().getValue('password_register').asString(),
          );
          setRegisterText(remoteConfig().getValue('register').asString());
          setLoginText(remoteConfig().getValue('register_login').asString());
        } else {
          console.log('Remote config values not activated.');
        }
      })
      .catch(error => {
        console.log('Error fetching remote config values:', error);
      });
  }, []);

  const handleRegister = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      await firestore().collection('users').doc(user.uid).set({
        firstName,
        lastName,
        email,
        password,
      });
      navigation.navigate('Home');

      // Log a register event to analytics
      analytics().logEvent('Register', {
        email: email,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
      console.log(error);
      crashlytics().recordError(error);
      analytics().logEvent('RegisterError', {
        error: error.message,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.pinimg.com/564x/01/62/70/016270ebec4d485b3e4c1cd3ea4da143.jpg',
          }}
        />
      </View>
      <Card>
        <Card.Content>
          <TextInput
            label={firstNameLabel}
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <TextInput
            label={lastNameLabel}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
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
          <TouchableOpacity style={styles.touchButton} onPress={handleRegister}>
            <Text>{registerText}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchButton} onPress={handleLogin}>
            <Text>{loginText}</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
};

export default RegisterScreen;
