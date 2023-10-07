import React, {useEffect} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {useAuth} from '../../context/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useAuth();

  const handleLogout = () => {
    // Logout the user (clear the user data in the app's context)
    logout();
  };

  useEffect(() => {
    // Navigate to the LoginScreen after logout
    if (!user) {
      navigation.navigate('Login');
    }
  }, [user, navigation]);

  const handleEditProfile = () => {
    // Pass the user data to the Profile screen
    navigation.navigate('Profile', {user});
  };

  const handleDeleteAccount = async () => {
    // Show a confirmation dialog
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Account deletion canceled'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            // Clear user data from AsyncStorage
            try {
              await AsyncStorage.removeItem('userData');
            } catch (error) {
              console.error('Error removing user data:', error);
            }
            logout();
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.boldItalicSkyBlue}>Welcome, {user.name}!</Text>
          <Text style={styles.boldItalicSkyBlue}>Email: {user.email}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Logout" onPress={handleLogout} />
            <Button title="Edit Profile" onPress={handleEditProfile} />
            <Button title="Delete Account" onPress={handleDeleteAccount} />
          </View>
        </>
      ) : null}
    </View>
  );
};

export default HomeScreen;
