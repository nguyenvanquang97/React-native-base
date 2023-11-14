import fetchClient from "./fetchClient";

const { USERDATA } = require("../../utils/UserData");

const orderApi = {
    getOrder(itemCode,listStatus,keySearch,page) {
        const url = `v1/OrderHdr/searchAllByParam?page=${page??""}&size=10`;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("cApiKey", "19001111");
        myHeaders.append("Authorization", USERDATA.token);
        return fetchClient(url, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                orderType: "1",
                isInternational: "0",
                typeDate: "CREATED",
                toDateFromDate: ["2023-09-19",
                    "2025-09-25"],
                searchValue: itemCode??"",
                lstStatus: listStatus??[],
                orgCode: [],    
                os: "ANDROID",
                senderValue: keySearch.senderValue??'',
                contract: keySearch.contract??"",
                senderProvinceCode: keySearch.senderProvinceCode??"",
                senderDistrictCode: keySearch.senderDistrictCode??"",
                senderCommuneCode: keySearch.senderCommuneCode??"",
                contractC: keySearch.contract??"",
                receiverprovinceCode: keySearch.receiverprovinceCode??"",
                receiverDistrictCode: keySearch.receiverDistrictCode??"",
                receiverCommuneCode: keySearch.receiverCommuneCode??"",
                batchCode: keySearch.batchCode??"",
                owner: keySearch.owner??"",
                createdBy: keySearch.createdBy??"",
            })
        });
    },
    getOrderStatus() {
        const url = 'v1/orderStatus/findAllOrderStatus';
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("cApiKey", "19001111");
        myHeaders.append("Authorization", USERDATA.token);
        return fetchClient(url, {
            method: 'GET',
            headers: myHeaders,
        });
    },
}
export default orderApi;