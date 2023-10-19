import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
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
          <Button mode="contained" onPress={handleLogin}>
            Login
          </Button>
        </Card.Actions>
        <Card.Actions>
          <Button mode="contained" onPress={handleRegister}>
            Register
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default LoginScreen;
