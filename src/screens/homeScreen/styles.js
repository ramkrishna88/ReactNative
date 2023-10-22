import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  locationDetails: {
    position: 'absolute',
    bottom: 124,
    left: 16,
    right: 16,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'coloumn',
    marginTop: 16,
  },
  zoomButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    margin: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
  profileCard: {
    flex: 0.3,
    top: 80,
    width: '100%',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
  },
  title: {
    padding: 16,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 16,
  },
});

export default styles;
