import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, RegisterScreen} from '../screens';

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
          options={{
            title: 'Home Screen',
            headerRight: navigation => (
              <Button
                onPress={() => {
                  navigation.navigate('cartScreen');
                }}
                title="Cart"
                color="red"
              />
            ),
            headerLeft: navigation => (
              <Button
                onPress={() => {
                  navigation.navigate('Logout');
                }}
                title="Logout"
                color="red"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
