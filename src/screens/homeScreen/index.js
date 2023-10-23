import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import styles from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const HomeScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    if (Platform.OS === 'android') {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      if (cameraPermission === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera(options, response => {
          if (response && !response.didCancel && !response.error) {
            setSelectedImage(response.assets[0]?.uri);
          }
        });
      }
    } else if (Platform.OS === 'ios') {
      const cameraPermission = await request(PERMISSIONS.IOS.CAMERA);

      if (cameraPermission === RESULTS.GRANTED) {
        launchCamera(options, response => {
          if (response && !response.didCancel && !response.error) {
            setSelectedImage(response.assets[0]?.uri);
          }
        });
      } else if (cameraPermission === RESULTS.DENIED) {
        console.log('Camera permission denied');
      } else if (cameraPermission === RESULTS.BLOCKED) {
        console.log('Camera permission blocked');
      }
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
