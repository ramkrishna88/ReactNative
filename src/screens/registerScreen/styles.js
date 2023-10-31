import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#6495ed',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 150 / 2,
    alignSelf: 'center',
    marginBottom: 30,
  },
  touchButton: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
