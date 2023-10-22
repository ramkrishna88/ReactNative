import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const MapsDirectionsScreen = ({navigation}) => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const handleGetDirections = () => {
    navigation.navigate('Home', {
      startLocation,
      endLocation,
    });
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Enter start location"
        onPress={(data, details = null) => {
          setStartLocation(data.description);
        }}
        onFail={error => console.error(error)}
        query={{
          key: 'AIzaSyD5gUs-28MJ34VoD-unyVmVPEhVc2pmnJ0',
          language: 'en',
        }}
        autoComplete={true}
      />
      <GooglePlacesAutocomplete
        placeholder="Enter end location"
        onPress={(data, details = null) => {
          setEndLocation(data.description);
        }}
        query={{
          key: 'AIzaSyD5gUs-28MJ34VoD-unyVmVPEhVc2pmnJ0',
          language: 'en',
        }}
        autoComplete={true}
      />

      <TouchableOpacity
        style={styles.getDirectionsButton}
        onPress={handleGetDirections}>
        <Text style={styles.getDirectionsButtonText}>Get Directions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapsDirectionsScreen;
