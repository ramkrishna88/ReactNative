import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  PermissionsAndroid,
} from 'react-native';
import styles from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const HomeScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    const cameraPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (cameraPermission === PermissionsAndroid.RESULTS.GRANTED) {
      launchCamera(options, response => {
        if (!response.didCancel && !response.error) {
          setSelectedImage(response.assets[0].uri);
        }
      });
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setSelectedGallery(result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openCamera}>
        <Text style={styles.text}>Launch Camera</Text>
      </TouchableOpacity>

      {selectedImage && (
        <Image style={styles.imageStyle} source={{uri: selectedImage}} />
      )}

      <TouchableOpacity style={styles.button} onPress={openGallery}>
        <Text style={styles.text}>Launch Gallery</Text>
      </TouchableOpacity>

      {selectedGallery && (
        <Image style={styles.imageStyle} source={{uri: selectedGallery}} />
      )}
    </View>
  );
};

export default HomeScreen;
