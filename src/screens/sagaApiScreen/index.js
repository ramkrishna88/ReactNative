import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../action/fetchProduct';
import {Card, Text, Image} from 'react-native-elements';

const SagaApiScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <ScrollView>
      {products.data &&
        products.data.map(product => (
          <Card key={product.id}>
            <Image
              source={{uri: product.image}}
              style={{width: 200, height: 200}}
            />
            <Text style={{marginBottom: 10, marginTop: 10, fontSize: 18}}>
              {product.title}
            </Text>
            <Text style={{marginBottom: 10}}>{product.description}</Text>
            <Text
              style={{fontWeight: 'bold'}}>{`Price: $${product.price}`}</Text>
          </Card>
        ))}
    </ScrollView>
  );
};

export default SagaApiScreen;
