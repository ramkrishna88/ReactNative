import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 380,
    marginHorizontal: 8,
    borderRadius: 16,
    padding: 16,
    elevation: 5,
    margin: 10,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  cartItemText: {
    fontSize: 18,
  },
  totalPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityButton: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  removeFromCartButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  removeFromCartButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
