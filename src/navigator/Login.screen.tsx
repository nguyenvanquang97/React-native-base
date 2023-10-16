import {
  Alert,
  Dimensions,
  Keyboard,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AppIcon from '../assets/svg-icons/ic_app';

const LoginScreen = ({ route, navigation }) => {
  //   const {
  //     params: {clientId},
  //   } = route;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    navigation.navigate('Profile', { data: 1 })
  };
  return (
    // <ImageBackground source={LoginBackground} style={styles.imgBackground}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        // source={require('./src/assets/images/bg_msb.png')}
        style={styles.imgBackground}>
        <AppIcon style={styles.appIcon} />
        {/* <SafeAreaView> */}
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPress={Keyboard.dismiss}>
          <View style={styles.marginTop22}>
            <Text>VNeID</Text>

            <TextInput
              style={[styles.wrapperStyle, styles.inputStyle]}
              onChangeText={text => setUsername(text)}
              placeholder={'Số định danh cá nhân'}
              placeholderTextColor={'grey'}
              autoCapitalize="none"
              value={username}
              keyboardType="number-pad"
            />

            <View>
              <TextInput
                style={[styles.wrapperStyle, styles.inputStyle]}
                placeholder="Mật khẩu"
                secureTextEntry={true}
                placeholderTextColor={'grey'}
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.forgotPw}
          // onPress={() => navigation.navigate(AppRoutes.FORGOT_PASSWORD)}
          >
            <Text>Quên mật khẩu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.redButton} onPress={handleLogin}>
            <Text style={{ color: 'white' }}>Đăng nhập</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      {/* </SafeAreaView> */}
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imgBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#AD1F28',
  },
  appIcon: {
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? 108 : 38,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 16,
    width: Dimensions.get('window').width - 32,
    alignSelf: 'center',
    borderRadius: 16,
    marginTop: 16,
  },
  forgotPw: {
    marginBottom: 12,
    marginTop: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
    alignSelf: 'flex-end',
    width: 160,
  },
  inputStyle: {
    height: 48,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 16,
    marginBottom: 22,
    // fontSize: appFontSize.small,
  },
  wrapperStyle: {
    marginTop: 5,
  },
  marginTop22: {
    marginTop: 22,
  },

  redButton: {
    justifyContent: 'center',
    minHeight: (Dimensions.get('window').width * 0.4) / 3.5,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#AD1F28',
    backgroundColor: '#AD1F28',
    marginBottom: 20,
  },
});
