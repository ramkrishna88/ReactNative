import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../features/CartItems/cartItems';
import styles from './styles';

const HomeScreen = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const addToCartHandler = item => {
    dispatch(addToCart(item));
  };

  return (
    <FlatList
      data={Object.keys(items)}
      keyExtractor={itemType => itemType}
      renderItem={({item: itemType}) => (
        <View style={styles.itemTypeContainer}>
          <Text style={styles.itemTypeText}>{itemType}</Text>
          <FlatList
            data={items[itemType]}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({item}) => (
              <View style={styles.card}>
                <Image source={{uri: item.image}} style={styles.cardImage} />
                <Text style={styles.cardText}>Brand: {item.brand}</Text>
                <Text style={styles.cardText}>Model: {item.model}</Text>
                <Text style={styles.cardText}>Price: ${item.price}</Text>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => addToCartHandler(item)}>
                  <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    />
  );
};

export default HomeScreen;
