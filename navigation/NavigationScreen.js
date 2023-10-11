import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, RegisterScreen, CartScreen} from '../screens';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../features/Authentication/Authentication';

const Stack = createNativeStackNavigator();

function NavigationScreen() {
  const dispatch = useDispatch();

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
                  dispatch(logoutAction());
                  navigation.navigate('Login');
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
