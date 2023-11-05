import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';

const FireBaseEditScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    id,
    name: initialName,
    description: initialDescription,
    price: initialPrice,
    image: initialImage,
  } = route.params;

  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);
  const [image, setImage] = useState(initialImage);

  const handleUpdate = () => {
    // Display an alert for confirmation
    Alert.alert(
      'Confirm Update',
      'Are you sure you want to update this item?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            try {
              await firestore()
                .collection('Feeds')
                .doc(id)
                .update({
                  name,
                  description,
                  price: parseFloat(price),
                  image,
                });

              Alert.alert('Success', 'Item updated successfully!', [
                {
                  text: 'OK',
                  onPress: () => {
                    navigation.goBack();
                  },
                },
              ]);
            } catch (error) {
              console.error('Error updating data:', error);
            }
          },
        },
      ],
    );
  };

  return (
    <View>
      <Text style={styles.TextHeader}>Edit Item</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Image"
        value={image}
        onChangeText={text => setImage(text)}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Price"
        value={price.toString()}
        onChangeText={text => setPrice(text)}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default FireBaseEditScreen;
