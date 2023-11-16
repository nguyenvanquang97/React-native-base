import { PermissionsAndroid } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const ImagePickerCustom = {
    launchCamera() {
        return new Promise(async (resolve, reject) => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                      title: "App Camera Permission",
                      message:"App needs access to your camera ",
                      buttonNeutral: "Ask Me Later",
                      buttonNegative: "Cancel",
                      buttonPositive: "OK"
                    }
                  );
                  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log(" ");
                  } else {
                    console.log("Camera permission denied");
                  }
                  ImagePicker.launchCamera(
                    {
                      includeBase64: false,
                      mediaType: 'photo',
                      quality: 0.8,
                    },
                    async (response:any) => {
                      if (response.didCancel) {
                        resolve({message:'User cancelled image picker',code:400});
                      } else if (response.error) {
                       resolve({message:'User cancelled image picker',code:response.error});
                      } else {
                        resolve({data:response,code:200})
                      }
                    }
                  )
            } catch (error) {
                reject(error); // Reject the Promise with the error
            }
        })
    },
    launchImageLibrary(callBack: any) {
        ImagePicker.launchImageLibrary({
            selectionLimit: 0,
            mediaType: 'photo'
        }, (a) => {
            console.log("111")
            if(callBack){
                callBack(a);
            }
        })
    }
}

export default ImagePickerCustom;