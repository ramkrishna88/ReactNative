import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {Card} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 51.509865,
    longitude: -0.118092,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [user, setUser] = useState(null);
  const [locationName, setLocationName] = useState('United Kingdom');

  const handleGetDirections = () => {
    navigation.navigate('MapsDirections');
  };

  const sagaApiScreen = () => {
    navigation.navigate('SagaApi');
  };

  const FireStoreScreen = () => {
    navigation.navigate('FireBaseAssignment');
  };

  useEffect(() => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
  }, []);

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : 'ca-app-pub-1210860150241703~4656288705';

  const handleMapPress = event => {
    const {latitude, longitude} = event.nativeEvent.coordinate;
    setRegion({
      ...region,
      latitude,
      longitude,
    });

    // Fetch location details (reverse geocoding)
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`,
    )
      .then(response => response.json())
      .then(data => {
        const location = data.display_name || 'Unknown Location';
        setLocationName(location);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Title title="Profile" />
        <Card.Content>
          {user ? (
            <View>
              <Text>
                Welcome: {user.displayName ? user.displayName : user.email}
              </Text>
              <Text>Email: {user.email}</Text>
            </View>
          ) : (
            <Text>No user is signed in.</Text>
          )}
        </Card.Content>
      </Card>

      <MapView
        style={styles.map}
        initialRegion={region}
        onPress={handleMapPress}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title={locationName}
        />
      </MapView>
      <View style={styles.locationDetails}>
        <Text>{locationName}</Text>
      </View>

      <TouchableOpacity
        style={styles.locationDetails2}
        onPress={handleGetDirections}>
        <Text style={styles.getDirectionsButtonText}>Get Directions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.locationDetails3} onPress={sagaApiScreen}>
        <Text style={styles.getDirectionsButtonText}>Get Saga Api</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.locationDetails4}
        onPress={FireStoreScreen}>
        <Text style={styles.getDirectionsButtonText}>Assignment</Text>
      </TouchableOpacity>

      <View>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
