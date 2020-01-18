import axios from "axios";

export const http = axios.create({
    baseURL: "https://server-cli-api.herokuapp.com/api",
    headers: {
        'x-access-token': localStorage.getItem("CFToken"),
       // The session's API Access is token stored in here ^^
// https://server-cli-api.herokuapp.com/api

// My cluster:
// http://powerful-beach-37119.herokuapp.com
   

    }
});

http.interceptors.response.use(async function (response) {
    return response;
}, async function (error) {
    // localStorage.removeItem("CFToken");
    return Promise.reject(error);
});
