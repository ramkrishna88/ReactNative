import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemTypeContainer: {
    marginVertical: 16,
  },
  itemTypeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginStart: 24,
  },
  card: {
    backgroundColor: 'white',
    width: 280,
    height: 330,
    marginHorizontal: 8,
    borderRadius: 16,
    padding: 16,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
  },
  addToCartButton: {
    marginTop: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
