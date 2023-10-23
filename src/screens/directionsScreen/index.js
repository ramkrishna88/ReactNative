import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
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
      <ScrollView>
        <GooglePlacesAutocomplete
          styles={{
            textInputContainer: {
              backgroundColor: 'skyblue',
              borderTopWidth: 0,
              borderBottomWidth: 0,
              height: 40,
              color: '#000',
            },
            textInput: {
              height: 40,
              color: '#000',
              fontSize: 16,
            },
          }}
          placeholder="Enter start location"
          placeholderTextColor="#000"
          onPress={(data, _details = null) => {
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
          onPress={(data, _details = null) => {
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
      </ScrollView>
    </View>
  );
};

export default MapsDirectionsScreen;
