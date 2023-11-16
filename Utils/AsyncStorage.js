import AsyncStorage from '@react-native-async-storage/async-storage';

// Lưu token
export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
  } catch (error) {
    console.error('Lỗi khi lưu token:', error);
  }
};

// Lấy token
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('Lỗi khi lấy token:', error);
    return null;
  }
};
