import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../CartScreen/index';
import styles from './styles';

const HomeScreen = () => {
  const itemTypes = useSelector(state => Object.keys(state.items));
  const dispatch = useDispatch();

  const addToCartHandler = item => {
    dispatch(addToCart(item));
  };

  return (
    <FlatList
      data={itemTypes}
      keyExtractor={itemType => itemType}
      renderItem={({item: itemType}) => (
        <View style={styles.itemTypeContainer}>
          <Text style={styles.itemTypeText}>{itemType}</Text>
          <FlatList
            data={itemType}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({item}) => (
              <View style={styles.card}>
                <Image source={{uri: item.image}} style={styles.cardImage} />
                <Text style={styles.cardText}>{item.id}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
                <Text style={styles.cardText}>${item.price}</Text>
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
