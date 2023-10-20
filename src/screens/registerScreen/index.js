import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

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
    } catch (error) {
      console.error('Error registering user:', error);
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
            label="First Name"
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <TextInput
            label="Last Name"
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleRegister}>
            Register
          </Button>
        </Card.Actions>
        <Card.Actions>
          <Button mode="contained" onPress={handleLogin}>
            If you have an account, please login
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default RegisterScreen;
