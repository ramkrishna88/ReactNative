import React, {useState} from 'react';
import {View} from 'react-native';
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
      </Card>
    </View>
  );
};

export default RegisterScreen;
