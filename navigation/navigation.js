import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native';
import {HomeScreen, DetailsScreen} from '../screens';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Home',
            headerLeft: () => (
              <Button
                title="Nyc Schools"
                onPress={() => {
                  navigation.navigate('Details');
                }}
              />
            ),
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
