import React, { Component, useEffect } from 'react';
//Redux
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/rootSaga';

import notifee, { AndroidBadgeIconType, AndroidImportance, EventType } from '@notifee/react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/navigator/Home';
import { PermissionsAndroid } from 'react-native';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import messaging from '@react-native-firebase/messaging';
import Home from './src/navigator/Home';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
//Middleware
const sagaMiddleware = createSagaMiddleware();
//Từ applyMiddleware vào Reducers thì tạo một store, sagaMiddleware nằm giữa Action và Reducers.
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
export type RootStackParamList = {
  Login:undefined
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};
const App = () => {

  const onDisplayNotification=async (notification:any,data:any)=>{
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'important',
      name: 'Important Notifications',
      importance: AndroidImportance.HIGH,
    });

    // Display a notification
    await notifee.displayNotification({
      title: notification?.title,
      body: notification?.body,
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.,
        largeIcon:"https://cdn-icons-png.flaticon.com/256/124/124010.png",
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  const requestFCMPermission = async () => {
    const authResponse = await messaging().requestPermission();
    const enabled = authResponse === messaging.AuthorizationStatus.AUTHORIZED
    
   }
   
   const onMessageHandler = (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    const { notification, data } = remoteMessage;
    onDisplayNotification(notification,data)
   }
   
   useEffect(() => {
    requestFCMPermission();
    const unsubMessaging = messaging().onMessage(onMessageHandler)
    return () => {
     unsubMessaging()
    }
   },[])
   return(
    <Provider store={store}>
    <MenuProvider>
    <SafeAreaProvider>
    <NavigationContainer>
            <RootStack.Navigator
              initialRouteName="Login" screenOptions={screenOptions}>
              <RootStack.Screen name="Login" component={Home} />
              </RootStack.Navigator>
              </NavigationContainer>
    </SafeAreaProvider>
    </MenuProvider>
  </Provider>
   )
}

;
export default class AppSaga extends Component {
  render() {
    return <App />;
  }
}

sagaMiddleware.run(rootSaga); //Chạy xuyên suốt các hàm rootSaga trong app 
