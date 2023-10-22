import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const HomeScreen = () => {
  const [region, setRegion] = useState({
    latitude: 51.509865,
    longitude: -0.118092,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [locationName, setLocationName] = useState('United Kingdom');

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : 'ca-app-pub-1210860150241703~4656288705';

  const handleMapPress = event => {
    // Get the coordinates of the tapped location
    const {latitude, longitude} = event.nativeEvent.coordinate;

    // Update the region and location description
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
      <MapView
        style={styles.map}
        initialRegion={region}
        onPress={handleMapPress}>
        <Marker
          coordinate={{latitude: region.latitude, longitude: region.longitude}}
          title={locationName}
        />
      </MapView>
      <View style={styles.locationDetails}>
        <Text>{locationName}</Text>
      </View>
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
