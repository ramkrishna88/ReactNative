import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {useAuth} from '../../context/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  // Access the user data and logout function from the authentication context
  const {user, logout} = useAuth();

  // Arrays of greeting words and main messages to display
  const greetingWords = [
    'Hello',
    'Hi',
    'Hey',
    'Greetings',
    'Hola',
    'Good morning',
    'Good day',
    'Howdy',
    'Hi there',
    'Salutations',
    "What's up",
    'Yo',
    'Hiya',
    "How's it going",
    'Hi folks',
    'Hey there',
    'Hi friends',
    'Hello world',
    'Hi everyone',
    'Hi team',
  ];

  const mainMessages = [
    'Welcome to our app!',
    'Enjoy your stay!',
    'Explore our features!',
    'Discover new things!',
    "We're glad you're here!",
    'Join our community!',
    'Have a fantastic day!',
    'Make yourself at home!',
    'Get ready to be amazed!',
    'The adventure begins!',
    'Stay connected with us!',
    'Your journey starts now!',
    'The fun starts here!',
    'Unleash your creativity!',
    "We're here to assist you!",
    'Great things await you!',
    'Experience the magic!',
    'Get ready to be inspired!',
    'Thanks for choosing us!',
    'Enjoy every moment!',
  ];

  // State to hold the displayed message
  const [displayedMessage, setDisplayedMessage] = useState('');

  // Refs to keep track of the current greeting and message index
  const currentGreetingIndex = useRef(0);
  const currentMessageIndex = useRef(0);

  // Function to handle user logout
  const handleLogout = () => {
    logout(); // Logout the user (clear the user data in the app's context)
  };

  // Effect to navigate to the LoginScreen after logout
  useEffect(() => {
    // Navigate to the LoginScreen after logout
    if (!user) {
      navigation.navigate('Login');
    }
  }, [user, navigation]);

  // Function to navigate to the Profile screen with user data
  const handleEditProfile = () => {
    // Pass the user data to the Profile screen
    navigation.navigate('Profile', {user});
  };

  // Function to handle account deletion
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
            logout(); // Logout the user
          },
        },
      ],
      {cancelable: false},
    );
  };

  // Function to animate text with a letter-by-letter effect
  const animateText = (text, callback) => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedMessage(prevText => prevText + text.charAt(index));
      index++;

      if (index >= text.length) {
        clearInterval(timer);
        setTimeout(callback, 1000); // Delay before resetting the animation
      }
    }, 100); // Adjust the delay for letter-by-letter animation
  };

  // Function to animate greeting and main message
  const animateGreetingAndMessage = () => {
    animateText(
      `${greetingWords[currentGreetingIndex.current]} ${user.name} `,
      () => {
        animateText(mainMessages[currentMessageIndex.current], () => {
          // Update the current greeting and message index, looping if necessary
          currentGreetingIndex.current =
            (currentGreetingIndex.current + 1) % greetingWords.length;
          currentMessageIndex.current =
            (currentMessageIndex.current + 1) % mainMessages.length;

          // Reset the displayed message and continue the animation
          setTimeout(() => {
            setDisplayedMessage('');
            animateGreetingAndMessage();
          }, 1000);
        });
      },
    );
  };

  // Effect to start the animation when the component mounts
  useEffect(() => {
    animateGreetingAndMessage();
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.boldItalicSkyBlue}>{displayedMessage}</Text>
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
