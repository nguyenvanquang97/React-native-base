import { useSelector } from "react-redux";
import { USERDATA } from "../../utils/UserData";
const fetchClient = async (url, options = {}) => {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const mergedOptions = {
        ...defaultOptions,
        ...options
    };
    return fetch(`http://10.15.119.63:8889/${url}`, mergedOptions)
        .then(async function (response) {
            if (response.status === 200) {
                const data = await response.json()
                return { data: data, code: response.status }
            } else {
                return { data: null, code: response.status }
            }

        })
        .catch(error => {
            console.error("Fetch error:", error);
            throw error;
        });
};

export default fetchClient;