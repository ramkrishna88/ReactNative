import messaging from '@react-native-firebase/messaging';

class NotificationHelper {
  getToken = () => {
    messaging()
      .getToken()
      .then(token => {
        console.log('here is the token');

        console.log(token);
      });
  };

  refreshToken = () => {
    messaging().onTokenRefresh(token => {
      console.log('here is the refreshed token');
      console.log(token);
    });
  };

  initializeFCM = () => {
    this.messageListener = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(remoteMessage);
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log(remoteMessage);
    });
  };

  checkFCMPermission = async () => {
    const authStatus = await messaging().requestPermission();

    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    console.log('Authorization status: ', authStatus);
  };

  getInitialNotification = () => {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log(remoteMessage);
      });
  };

  unMount = () => {
    this.messageListener();
  };
}

export default new NotificationHelper();
