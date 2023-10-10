import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  header: {
    marginBottom: 16,
  },
  logo: {
    width: 400,
    height: 250,
  },
  backgroundTop: {
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    width: 340,
    height: 40,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: 300,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    zIndex: 1,
  },
});

export default styles;
