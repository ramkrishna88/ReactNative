import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, RegisterScreen, CartScreen} from '../screens';

const Stack = createNativeStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Home Screen',
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('Cart');
                }}
                title="Cart"
                color="red"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => {
                  navigation.navigate('Logout');
                }}
                title="Logout"
                color="red"
              />
            ),
          })}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
