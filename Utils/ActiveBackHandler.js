import { BackHandler, Alert } from 'react-native';

let isBackHandlerActive = false;

export const activateBackHandler = () => {
  if (!isBackHandlerActive) {
    isBackHandlerActive = true;

    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }
};
