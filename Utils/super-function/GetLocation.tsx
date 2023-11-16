import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
const getCurrentLocation=()=>{
    return new Promise(async (resolve, reject) => {
        try {
            if (Platform.OS === 'android') {
                await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
                console.log("ok location")
              }
              Geolocation.getCurrentPosition(
                (position) => {
                  resolve({code:200,data:position})
                },
                (error) => {
                    resolve({code:error.code,message:error.message})
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        } catch (error) {
            reject(error); // Reject the Promise with the error
        }
    });
}
export default getCurrentLocation;