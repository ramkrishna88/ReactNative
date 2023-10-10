import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../features/CartItems/cartItems';
import styles from './styles';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const removeFromCartHandler = id => {
    dispatch(removeFromCart({id}));
  };

  const increaseQuantityHandler = id => {
    dispatch(increaseQuantity({id}));
  };

  const decreaseQuantityHandler = id => {
    dispatch(decreaseQuantity({id}));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <View>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.cartItemText}>Brand: {item.brand}</Text>
            <Text style={styles.cartItemText}>Model: {item.model}</Text>
            <Text style={styles.cartItemText}>Price: ${item.price}</Text>
            <Text style={styles.cartItemText}>Quantity: {item.quantity}</Text>
            <View style={styles.quantityControl}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => increaseQuantityHandler(item.id)}>
                <Text style={styles.cartItemText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => decreaseQuantityHandler(item.id)}>
                <Text style={styles.cartItemText}>-</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.removeFromCartButton}
              onPress={() => removeFromCartHandler(item.id)}>
              <Text style={styles.removeFromCartButtonText}>
                Remove from Cart
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: ${totalPrice}</Text>
        <Text style={styles.totalText}>Total Quantity: {totalQuantity}</Text>
      </View>
    </View>
  );
};

export default CartScreen;
