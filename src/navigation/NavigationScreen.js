import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationHelper from '../helper/notificationHelper/NotificationHelper';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  MapsDirectionsScreen,
  SagaApiScreen,
  FirebaseAssignmentScreen,
  FireBaseUploadScreen,
} from '@screens';

const Stack = createNativeStackNavigator();

NotificationHelper.initializeFCM();
NotificationHelper.checkFCMPermission();
NotificationHelper.getToken();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MapsDirections" component={MapsDirectionsScreen} />
        <Stack.Screen name="SagaApi" component={SagaApiScreen} />
        <Stack.Screen
          name="FireBaseAssignment"
          component={FirebaseAssignmentScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('FireBaseUpload')}
                title="ADD"
                color="#fff"
              />
            ),
            headerShown: true,
            title: 'FireBaseAssignment',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#000',
            },
          })}
        />

        <Stack.Screen name="FireBaseUpload" component={FireBaseUploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
