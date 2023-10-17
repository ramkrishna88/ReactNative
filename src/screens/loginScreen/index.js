import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {
  useGetAllProductsQuery,
  useGetProductsQuery,
} from 'src/features/Products/apiSlice';

const LoginScreen = () => {
  const {data: getAllProducts} = useGetAllProductsQuery();
  const {data: getProducts} = useGetProductsQuery('1');

  console.log('data', getAllProducts);
  console.log('products', getProducts);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          padding: 16,
        }}>
        <Card>
          <Text>{JSON.stringify(getAllProducts)}</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
