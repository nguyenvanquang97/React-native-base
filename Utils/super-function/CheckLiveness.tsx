import { EKYCModule, PostEKYC } from 'ekyc_module';
const checkLiveness = (frontImage: string) => {
    return new Promise((resolve, reject) => {
        try {
            console.log("start");
            PostEKYC.checkLiveness(
                'http://api-poc-eid.paas.xplat.fpt.com.vn/api/',
                'VPB_POC',
                '39c0819c-dcb1-4f87-a5cb-f6a92d7fff07',
                'Transcode',
                frontImage,
                'vi',
                (valueSuccess: string) => {
                    const res={code:200,message:"check liveness success"}
                    resolve(res);
                },
                (errorCode: any) => {
                    console.error(errorCode);
                    reject(errorCode);
                },
            )
        } catch (error) {
            reject(error); // Reject the Promise with the error
        }
    });

};
export default checkLiveness