import { PostNFC } from 'nfc_module';

type checkNFCParams = {
    citizenIdentityCardId: string;
    yearOfBirth?: string;
    dateOfExpiried?: string
}
const checkNFC = ({ citizenIdentityCardId, yearOfBirth, dateOfExpiried }: checkNFCParams) => {
    console.log('start nfc');
    const start = new Date();
    console.log(start);
    return new Promise((resolve, reject) => {
        try {
            console.log("start");
            PostNFC.checkNFC(
                // citizenIdentityCardInfor?.soCmt, // số CCCD
                citizenIdentityCardId,
                'Vui lòng giữ nguyên vị trí CCCD', // text hiển thị trên bottomsheet
                (valueSuccess: any) => {
                    let endTime = new Date();
                    const res = { value: valueSuccess, code: 200, timeScan: endTime.getTime() - start.getTime() }
                    resolve(res)
                }, // Nhận gía trị trả về khi nfc thành công
                (errorCode: any) => {
                    let endTime = new Date();
                    const res = { value: errorCode, code: 400, timeScan: endTime.getTime() - start.getTime() }
                    resolve(res)
                }, // Nhận gía trị trả về khi nfc thất bại
            );
        } catch (error) {
            reject(error); // Reject the Promise with the error
        }
    });
   
}
export default checkNFC