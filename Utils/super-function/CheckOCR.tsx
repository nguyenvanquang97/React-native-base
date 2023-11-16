import { EKYCModule, PostEKYC } from 'ekyc_module';
import { saveCitizenIdentityCardInfor } from '../../Redux/Slices/authSlice';
import { useDispatch } from 'react-redux';
import { PermissionsAndroid } from 'react-native';

const checkOCR = () => {
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
            console.log("start");
            PostEKYC.checkOCR(
                'http://api-poc-eid.paas.xplat.fpt.com.vn/api/',
                'VPB_POC',
                '39c0819c-dcb1-4f87-a5cb-f6a92d7fff07',
                'Transcode',
                'vi',
                (ocrResponse: string) => {
            
                    resolve(ocrResponse); // Resolve the Promise with the OCR response
                },
                (err: string) => {
                    console.error(err);
                    reject(err); // Reject the Promise with the error
                }
            );
        } catch (error) {
            reject(error); // Reject the Promise with the error
        }
    });
};

export default checkOCR

