import axios from 'axios'

export const http = axios.create({
 
  baseURL: 'https://server-cli-api.herokuapp.com/api/',
  headers: { 
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZGM0ZjRmNTNkMzZiZjhiYjNkODA1ZiIsImlhdCI6MTU3NjE5NTg0NywiZXhwIjoxNTc2MjgyMjQ3fQ.p-9oCL3UQp4GcNmEAMup7J7E-aNBxpqw7b-xX0Q2wDQ'
    /*'X-API-KEY': '05b6acf0e04a9dce45f178cb10b51771',
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'*/
  }

  
})


// http.interceptors.request.use(request => {
//   console.log("REQUEST: === ", request)
//   return request;
// });

// http.interceptors.response.use(response => {
//   console.log("RESPONSEE: === ", response)
//   return response;
// });