import axios from "axios";

export const http = axios.create({
    baseURL: "myURL",
    headers: {
        'x-access-token': localStorage.getItem("CFToken"),
        'user-id': localStorage.getItem("CFId")
    }
});

http.interceptors.response.use(async function (response) {
    return response;
}, async function (error) {
    localStorage.removeItem("CFToken");
    return Promise.reject(error);
});

