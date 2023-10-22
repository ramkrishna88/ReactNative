import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
  },
  startLocationContainer: {
    flex: 1,
  },
  endLocationContainer: {
    justifyContent: 'flex-start',
  },
  getDirectionsButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  getDirectionsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
