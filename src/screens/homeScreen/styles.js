import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '40%',
  },
  locationDetails: {
    position: 'absolute',
    bottom: 80,
    left: 16,
    right: 16,
    backgroundColor: 'skyblue',
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
    top: 60,
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
  direction: {
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
  },
  locationDetails2: {
    position: 'absolute',
    bottom: 170,
    left: 16,
    right: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'skyblue',
  },
  locationDetails3: {
    position: 'absolute',
    bottom: 160,
    left: 16,
    right: 16,
    backgroundColor: 'skyblue',
    padding: 8,
    borderRadius: 8,
  },

  locationDetails4: {
    position: 'absolute',
    bottom: 90,
    left: 16,
    right: 16,
    backgroundColor: 'skyblue',
    padding: 8,
    borderRadius: 8,
  },
});

export default styles;
