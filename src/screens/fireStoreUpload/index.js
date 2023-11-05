import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import fireStore from '@react-native-firebase/firestore';
import styles from './styles';

const FireBaseUploadScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const handleUpload = () => {
    // Display an alert for confirmation
    Alert.alert(
      'Confirm Upload',
      'Are you sure you want to upload this item?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            try {
              await fireStore()
                .collection('Feeds')
                .add({
                  name,
                  description,
                  price: parseFloat(price),
                  image,
                });
              // Show a success message after upload
              Alert.alert('Success', 'Item uploaded successfully!', [
                {
                  text: 'OK',
                  onPress: () => {
                    // Clear the input fields
                    setName('');
                    setDescription('');
                    setPrice('');
                    setImage(null);

                    // Ask if the user has one more item to add
                    Alert.alert(
                      'One More Item?',
                      'Do you have one more item to add?',
                      [
                        {
                          text: 'No',
                          onPress: () => {
                            // Navigate back to the previous screen
                            navigation.goBack();
                          },
                        },
                        {
                          text: 'Yes',
                          style: 'default',
                        },
                      ],
                    );
                  },
                },
              ]);
            } catch (error) {
              console.error('Error uploading data to fireStore:', error);
            }
          },
        },
      ],
    );
  };

  return (
    <View>
      <Text style={styles.TextHeader}>What on Your Mind To ADD </Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Name"
        value={name}
        inputMode="text"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Description"
        value={description}
        inputMode="text"
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Image"
        value={image}
        inputMode="url"
        onChangeText={text => setImage(text)}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Price"
        value={price}
        inputMode="numeric"
        onChangeText={text => setPrice(text)}
      />
      <Button title="Upload to fireStore" onPress={handleUpload} />
    </View>
  );
};

export default FireBaseUploadScreen;
