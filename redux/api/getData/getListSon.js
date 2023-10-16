
export function getListSon(page, size) {
    return fetchWithTimeout(
        30000,
        fetch(

            `https://meid-api.api-fpt-eid.online/api/app/get/pb?page=${page}&size=${size}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    //  Authorization: auth,
                },
            },
        ),
    )
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            // console.log("response ",response)
            return response;
        })
        .catch((error) => {
            // console.log(error);
            // return { Result: false, Error: errorServerFail };
        });
}
