import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../../context/AuthProvider';
import styles from './styles';

function ProfileScreen({route, navigation}) {
  const {user, updateUser} = useAuth();
  const [name, setName] = useState(user ? user.name : ''); // Initialize with user data if available
  const [email, setEmail] = useState(user ? user.email : ''); // Initialize with user data if available

  useEffect(() => {
    // Set the initial values based on the user data received as a route parameter
    if (route.params && route.params.user) {
      setName(route.params.user.name);
      setEmail(route.params.user.email);
    }
  }, [route]);

  const handleSaveProfile = async () => {
    // Save the updated user data to AsyncStorage
    const updatedUser = {...user, name, email};
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(updatedUser));
      // Update the user data in the app's context
      updateUser(updatedUser);

      // Navigate back to the HomeScreen
      navigation.goBack();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleCancel = () => {
    // If the user cancels, navigate back to the HomeScreen
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      <Button title="Save" onPress={handleSaveProfile} />
      <Button title="Cancel" onPress={handleCancel} />
    </View>
  );
}

export default ProfileScreen;
