import { Platform } from "react-native";
import fetchClient from "./fetchClient";

const token = "03AFcWeA5f6bZryknoPJdCAoaqrq7KX5hY9-KZJmFZpHRweT4uyp98aGuVAilvYe2q4eHFSY9NcmbPeL0GRWIO47D6wCXM-Zm4rRKoayRmpCtm4o9SkkZ8nGZlkm0ptYx0DCQHwquJC0A1VOdDzE_fxZ_84nVvfqx8RqERRi6SK62TBOpxi9dUTSeG_S_U_XHF3EMp0qGFVjbpUaxcaLFAnnuOQdc7Mo_gKoWA8llsY4SYQ1cDQ2PLGRsI2oS-4GDQDXYxAZ8XNADg0O9TL2avnR7P6UQpifDxtJ8bgfOL1t1HwVyXAiKYOEfUsgYS3KPlLo_D86ykdRicTiMg2b9LPiXgb1Dqk2g4pRtc7L2kwLOx4TygarcLlP6c_cpXvJtvvDZx3uA4pcRsaFyqNVZIfhtdHQQKvJQjT4RV6EgCXE2Lex94H2r8DjFTDG3haEoMTZbT25MmrMj4iNiwML1Vol02WxkA5CJNFI3i_bz3SoDqo431lg8OjoxufAfRDnVMTXdEzjMUIOb4mVlDOSP6a0tl3mkYjSjhZEnjDF-HLQ5s4MmaG3pecTEYvNg7Jve-7cFXKAtg02oa";

const accountApi = {
    login(username, password) {
        const url = 'api/auth/login';
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("cApiKey", "19001111");
        return fetchClient(url, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                username: username,
                password: password,
                captcha: { "type": "V3", "value": token },
                os: "ANDROID"
            })
        });
    },
    
};

export default accountApi;