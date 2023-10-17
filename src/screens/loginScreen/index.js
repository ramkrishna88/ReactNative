import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import {
  useGetAllProductsQuery,
  useGetProductsQuery,
} from 'src/features/Products/apiSlice';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const {data: getAllProducts} = useGetAllProductsQuery();
  const {data: getProducts} = useGetProductsQuery('1');

  console.log('data', getAllProducts);
  console.log('products', getProducts);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Text>{JSON.stringify(getAllProducts)}</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
